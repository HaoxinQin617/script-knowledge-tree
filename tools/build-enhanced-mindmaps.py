from pathlib import Path

from PIL import Image, ImageEnhance, ImageFilter


ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "archive" / "source-images" / "mindmaps"
TARGET = ROOT / "public" / "illustrations" / "mindmaps-enhanced"


def enhance(source: Path, target: Path) -> None:
    with Image.open(source) as opened:
        image = opened.convert("RGB")
        # Approved master treatment: +20% saturation, -15% brightness, and
        # roughly +30% local definition so icons and glass edges read clearly.
        image = ImageEnhance.Color(image).enhance(1.20)
        image = ImageEnhance.Brightness(image).enhance(0.85)
        image = ImageEnhance.Contrast(image).enhance(1.12)
        edge = image.filter(ImageFilter.UnsharpMask(radius=2.0, percent=130, threshold=4))
        image = Image.blend(image, edge, 0.30)
        target.parent.mkdir(parents=True, exist_ok=True)
        image.save(target, format="PNG", optimize=True)


def main() -> None:
    sources = sorted(SOURCE.glob("*.png"))
    for source in sources:
        enhance(source, TARGET / source.name)
    print(f"Enhanced {len(sources)} mind maps into {TARGET}")


if __name__ == "__main__":
    main()
