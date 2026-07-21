import json
import re
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
FILES = [ROOT / "app" / "script-data.ts", ROOT / "app" / "task-data.ts"]
OUTPUT = ROOT / "public" / "illustrations" / "mindmap-text-only-blueprints.json"


def decode_string(value: str) -> str:
    return json.loads(f'"{value}"')


def main() -> None:
    records = []
    seen = set()
    object_pattern = re.compile(
        r'\{\s*id:"(?P<id>[^"]+)".*?title:"(?P<title>(?:\\.|[^"])*)".*?'
        r'summary:"(?P<summary>(?:\\.|[^"])*)".*?body:\[(?P<body>.*?)\]\s*\}',
        re.S,
    )
    string_pattern = re.compile(r'"((?:\\.|[^"])*)"')
    for source in FILES:
        text = source.read_text(encoding="utf-8")
        for match in object_pattern.finditer(text):
            node_id = match.group("id")
            if node_id in seen:
                continue
            seen.add(node_id)
            paragraphs = [decode_string(item) for item in string_pattern.findall(match.group("body"))]
            records.append(
                {
                    "id": node_id,
                    "title": decode_string(match.group("title")),
                    "summary": decode_string(match.group("summary")),
                    "script": "\n".join(paragraphs),
                    "targets": {
                        "style2": str(ROOT / "public" / "illustrations" / "mindmaps-from-text-style2" / f"{node_id}.svg"),
                        "style3": str(ROOT / "public" / "illustrations" / "mindmaps-from-text-style3" / f"{node_id}.svg"),
                    },
                    "constraints": {
                        "input_mode": "text_only",
                        "forbidden_reference_directories": [
                            "public/illustrations/mindmaps",
                            "public/illustrations/mindmaps-style2",
                            "public/illustrations/mindmaps-style3",
                            "public/illustrations/mindmaps-enhanced",
                            "public/illustrations/mindmaps-linear",
                        ],
                        "logic": "derive the actual hierarchy and linear reading order from this script",
                    },
                }
            )
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT.write_text(json.dumps(records, ensure_ascii=False, separators=(",", ":")), encoding="utf-8")
    print(f"Prepared {len(records)} text-only blueprints at {OUTPUT}")


if __name__ == "__main__":
    main()
