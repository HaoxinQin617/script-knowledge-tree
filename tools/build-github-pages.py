import argparse
import shutil
from pathlib import Path
from urllib.request import urlopen


ROOT = Path(__file__).resolve().parents[1]
CLIENT = ROOT / "dist" / "client"
OUTPUT = ROOT / "_site"
PUBLIC_ROOTS = ("assets", "illustrations", "guide-screenshots", "resource-screenshots")


def rewrite(text: str, base: str) -> str:
    for root in PUBLIC_ROOTS:
        text = text.replace(f"/{root}/", f"{base}{root}/")
    text = text.replace('/favicon.svg', f'{base}favicon.svg')
    return text


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--url", default="http://127.0.0.1:4173/")
    parser.add_argument("--base", default="/script-knowledge-tree/")
    args = parser.parse_args()
    base = "/" + args.base.strip("/") + "/"

    if OUTPUT.exists():
        shutil.rmtree(OUTPUT)
    shutil.copytree(CLIENT, OUTPUT)

    with urlopen(args.url, timeout=30) as response:
        html = response.read().decode("utf-8")
    html = rewrite(html, base)
    (OUTPUT / "index.html").write_text(html, encoding="utf-8")
    (OUTPUT / "404.html").write_text(html, encoding="utf-8")
    (OUTPUT / ".nojekyll").write_text("", encoding="utf-8")

    for asset in (OUTPUT / "assets").glob("*"):
        if asset.suffix in {".js", ".css"}:
            content = asset.read_text(encoding="utf-8")
            asset.write_text(rewrite(content, base), encoding="utf-8")
    print(f"GitHub Pages bundle created at {OUTPUT}")


if __name__ == "__main__":
    main()
