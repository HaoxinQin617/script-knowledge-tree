import html
import json
import math
import re
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
BLUEPRINTS = ROOT / "public" / "illustrations" / "mindmap-text-only-blueprints.json"
OUT = {
    "style2": ROOT / "public" / "illustrations" / "mindmaps-from-text-style2",
    "style3": ROOT / "public" / "illustrations" / "mindmaps-from-text-style3",
}

PUNCT = re.compile(r"[。！？；]\s*")
LEAD = re.compile(
    r"^(第一|第二|第三|第四|第五|第六|首先|其次|然后|接下来|最后|真正|所谓|简单来说|换句话说|一句话记忆)"
    r"[，、：: ]*"
)


def esc(value: str) -> str:
    return html.escape(value, quote=True)


def compact(value: str, limit: int) -> str:
    value = re.sub(r"\s+", "", value)
    value = LEAD.sub("", value)
    value = value.strip("，。；：:、“”‘’")
    return value if len(value) <= limit else value[: limit - 1] + "…"


def split_lines(value: str, width: int, max_lines: int = 2) -> list[str]:
    value = value.strip()
    if len(value) <= width:
        return [value]
    lines = [value[i : i + width] for i in range(0, len(value), width)]
    lines = lines[:max_lines]
    if len(value) > width * max_lines:
        lines[-1] = lines[-1][:-1] + "…"
    return lines


def stage_from_paragraph(text: str) -> dict[str, str]:
    sentences = [item.strip() for item in PUNCT.split(text) if item.strip()]
    first = sentences[0] if sentences else text
    label_source = ""
    route_label = ""
    if first.startswith("第") and "条路" in first:
        tail = first.split("条路", 1)[1].lstrip("，,：: ")
        if "而是" in tail:
            route_label = tail.split("而是", 1)[1]
        elif "是" in tail:
            route_label = tail.split("是", 1)[1]
    named = re.search(r"(?:叫|称为|就是|代表的是)([^。；，]{2,16})", first)
    question_label = ""
    for cue in ("会问：", "问题：", "先问："):
        if cue in text:
            question_label = text.split(cue, 1)[1].split("？", 1)[0].split("。", 1)[0]
            break
    subject = re.match(r"([^，。；：]{2,18}?)(?:，)?(?:是|可以理解为|代表|解决|负责)(?:的|了)?", first)
    if route_label:
        label_source = route_label
    elif question_label:
        label_source = question_label
    elif subject:
        label_source = subject.group(1)
    elif named:
        label_source = named.group(1)
    elif text.startswith("所以") or text.startswith("因此"):
        label_source = "形成判断标准"
    elif text.startswith("把") and ("放回" in first or "放在一起" in first):
        label_source = "对比并记住差异"
    else:
        label_source = first
    if label_source == first:
        for marker in ("：", ":", "，"):
            if marker in first:
                left, right = first.split(marker, 1)
                label_source = left if 2 <= len(left) <= 14 else right
                break
    label = compact(label_source, 13)
    detail_source = sentences[1] if len(sentences) > 1 else first
    detail = compact(detail_source, 28)
    return {"label": label or "关键环节", "detail": detail}


def build_structure(record: dict) -> dict:
    paragraphs = [line.strip() for line in record["script"].splitlines() if line.strip()]
    raw = [stage_from_paragraph(p) for p in paragraphs]
    if raw:
        first_question = re.search(r"[：:]([^。！？]{3,18})[？?]", paragraphs[0])
        if first_question:
            raw[0]["label"] = compact(first_question.group(1), 13)
        elif raw[0]["label"] == compact(paragraphs[0].split("。", 1)[0], 13):
            raw[0]["label"] = compact(f'先理解「{record["title"]}」', 13)
        if paragraphs[-1].startswith(("所以", "因此", "最后", "真正")):
            raw[-1]["label"] = "形成最终判断"
    if len(raw) == 7:
        # Preserve the opening, the three core explanatory sections, the decision
        # point and the conclusion; the penultimate recap is usually redundant.
        picks = [0, 1, 2, 3, 4, 6]
        stages = [raw[i] for i in picks]
    elif len(raw) > 7:
        picks = sorted(set(round(i * (len(raw) - 1) / 5) for i in range(6)))
        stages = [raw[i] for i in picks]
    else:
        stages = raw
    while len(stages) < 3:
        stages.append({"label": "形成结论", "detail": compact(record["summary"], 28)})

    n = len(stages)
    if n <= 4:
        cuts = [0, 2, n]
    elif n == 5:
        cuts = [0, 2, 4, 5]
    else:
        cuts = [0, 2, 4, n]
    groups = []
    for a, b in zip(cuts, cuts[1:]):
        segment = stages[a:b]
        if not segment:
            continue
        if len(segment) == 1:
            name = segment[0]["label"]
        else:
            name = f'{segment[0]["label"]} → {segment[-1]["label"]}'
        groups.append({"name": compact(name, 19), "start": a, "end": b})
    return {"stages": stages, "groups": groups}


def defs() -> str:
    return """
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#fbfbff"/><stop offset=".48" stop-color="#f6f2fb"/><stop offset="1" stop-color="#eef7fb"/>
      </linearGradient>
      <linearGradient id="pink" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#ef9bc7"/><stop offset="1" stop-color="#9d82db"/></linearGradient>
      <linearGradient id="blue" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#8cc7eb"/><stop offset="1" stop-color="#a29ae8"/></linearGradient>
      <linearGradient id="peach" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#f3b4a8"/><stop offset="1" stop-color="#e8b8dc"/></linearGradient>
      <linearGradient id="glass" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#ffffff" stop-opacity=".88"/><stop offset=".5" stop-color="#f4efff" stop-opacity=".65"/><stop offset="1" stop-color="#e9f6ff" stop-opacity=".74"/></linearGradient>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="150%"><feDropShadow dx="0" dy="8" stdDeviation="7" flood-color="#6b568f" flood-opacity=".15"/></filter>
      <filter id="soft" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="42"/></filter>
      <marker id="arrow" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0,0 L10,5 L0,10 Z" fill="#b54e91"/></marker>
    </defs>"""


def text_block(x: float, y: float, lines: list[str], size: int, weight: int, fill: str, anchor="start", gap=1.22) -> str:
    tspans = "".join(
        f'<tspan x="{x}" dy="{0 if i == 0 else size * gap}">{esc(line)}</tspan>' for i, line in enumerate(lines)
    )
    return f'<text x="{x}" y="{y}" text-anchor="{anchor}" font-size="{size}" font-weight="{weight}" fill="{fill}">{tspans}</text>'


def render_style2(record: dict, structure: dict) -> str:
    stages, groups = structure["stages"], structure["groups"]
    w, h = 1600, 1000
    parts = [f'<svg xmlns="http://www.w3.org/2000/svg" width="{w}" height="{h}" viewBox="0 0 {w} {h}">', defs(), '<rect width="1600" height="1000" fill="url(#bg)"/>']
    parts += ['<circle cx="180" cy="170" r="190" fill="#f4add0" opacity=".18" filter="url(#soft)"/>', '<circle cx="1370" cy="730" r="240" fill="#87c8ec" opacity=".18" filter="url(#soft)"/>']
    parts.append(text_block(92, 105, split_lines(record["title"], 20, 1), 52, 760, "#231f38"))
    parts.append(text_block(94, 154, split_lines(record["summary"], 48, 2), 23, 500, "#59566d"))

    top = 255
    group_h = 190
    colors = ["pink", "blue", "peach"]
    for gi, group in enumerate(groups):
        y = top + gi * 220
        color = colors[gi % len(colors)]
        parts.append(f'<rect x="78" y="{y}" width="1444" height="{group_h}" rx="28" fill="url(#glass)" stroke="#{"e8bfd7" if color == "pink" else "bad7ea" if color == "blue" else "e9cabc"}" stroke-width="2"/>')
        parts.append(f'<rect x="102" y="{y+26}" width="252" height="46" rx="23" fill="url(#{color})" opacity=".88"/>')
        parts.append(text_block(228, y + 58, split_lines(compact(group["name"], 15), 15, 1), 18, 740, "#2b2340", "middle"))
        indices = list(range(group["start"], group["end"]))
        available = 1120
        cell_w = available / max(1, len(indices))
        for local, idx in enumerate(indices):
            x = 374 + local * cell_w
            card_w = min(480, cell_w - 42)
            parts.append(f'<rect x="{x}" y="{y+28}" width="{card_w}" height="134" rx="18" fill="#ffffff" fill-opacity=".74" stroke="#ffffff" stroke-width="2" filter="url(#shadow)"/>')
            parts.append(f'<circle cx="{x+42}" cy="{y+66}" r="22" fill="url(#{color})"/>')
            parts.append(text_block(x + 42, y + 74, [str(idx + 1)], 18, 800, "#ffffff", "middle"))
            parts.append(text_block(x + 78, y + 67, split_lines(stages[idx]["label"], 12, 1), 24, 760, "#252039"))
            parts.append(text_block(x + 30, y + 112, split_lines(stages[idx]["detail"], max(12, int(card_w / 25)), 2), 17, 480, "#5d586e"))
            if local < len(indices) - 1:
                ax1, ax2 = x + card_w + 8, x + cell_w - 12
                parts.append(f'<path d="M {ax1} {y+95} L {ax2} {y+95}" stroke="#b54e91" stroke-width="5" stroke-linecap="round" marker-end="url(#arrow)"/>')
        if gi < len(groups) - 1:
            parts.append(f'<path d="M 1490 {y+165} C 1536 {y+188},1536 {y+210},1490 {y+232}" fill="none" stroke="#b54e91" stroke-width="5" marker-end="url(#arrow)"/>')

    footer = 946
    parts.append(f'<rect x="310" y="{footer-48}" width="980" height="64" rx="32" fill="url(#glass)" stroke="#dcb5d3" stroke-width="2"/>')
    parts.append(text_block(800, footer - 7, [compact(" → ".join(s["label"] for s in stages), 54)], 22, 760, "#402b58", "middle"))
    parts.append('</svg>')
    return "".join(parts)


def render_style3(record: dict, structure: dict) -> str:
    stages, groups = structure["stages"], structure["groups"]
    w, h = 1600, 1000
    parts = [f'<svg xmlns="http://www.w3.org/2000/svg" width="{w}" height="{h}" viewBox="0 0 {w} {h}">', defs(), '<rect width="1600" height="1000" fill="url(#bg)"/>']
    parts += ['<ellipse cx="250" cy="210" rx="270" ry="190" fill="#dda6da" opacity=".22" filter="url(#soft)"/>', '<ellipse cx="1320" cy="760" rx="300" ry="210" fill="#8fcce5" opacity=".22" filter="url(#soft)"/>']
    parts.append(f'<rect x="52" y="42" width="1496" height="916" rx="34" fill="#ffffff" fill-opacity=".38" stroke="#ffffff" stroke-width="3"/>')
    parts.append(text_block(98, 112, split_lines(record["title"], 20, 1), 52, 800, "#221c36"))
    parts.append(text_block(100, 159, split_lines(record["summary"], 52, 2), 22, 520, "#555069"))

    n = len(stages)
    node_w = 540
    node_h = 132
    x_positions = [155, 905]
    y_positions = [285, 500, 715]
    colors = ["pink", "blue", "peach"]
    for gi, group in enumerate(groups):
        y = y_positions[min(gi, 2)]
        parts.append(f'<rect x="102" y="{y-74}" width="1396" height="182" rx="34" fill="url(#glass)" stroke="#ffffff" stroke-width="3" filter="url(#shadow)"/>')
        parts.append(f'<rect x="124" y="{y-112}" width="350" height="42" rx="21" fill="url(#{colors[gi % len(colors)]})" fill-opacity=".5"/>')
        parts.append(text_block(299, y - 84, split_lines(compact(group["name"], 18), 18, 1), 18, 760, "#3e3154", "middle"))
        for idx in range(group["start"], group["end"]):
            local = idx - group["start"]
            ordered_x = x_positions if gi % 2 == 0 else list(reversed(x_positions))
            x = ordered_x[min(local, 1)]
            color = colors[gi % len(colors)]
            parts.append(f'<rect x="{x}" y="{y-48}" width="{node_w}" height="{node_h}" rx="22" fill="url(#{color})" fill-opacity=".38" stroke="#ffffff" stroke-width="2"/>')
            parts.append(f'<circle cx="{x+34}" cy="{y-9}" r="24" fill="url(#{color})" stroke="#ffffff" stroke-width="2"/>')
            parts.append(text_block(x + 34, y - 1, [str(idx + 1)], 19, 820, "#ffffff", "middle"))
            parts.append(text_block(x + 68, y - 2, split_lines(stages[idx]["label"], 10, 1), 22, 800, "#28203d"))
            parts.append(text_block(x + 24, y + 37, split_lines(stages[idx]["detail"], 28, 2), 16, 520, "#554d68"))
            if idx < n - 1:
                next_group = next((g for g in groups if g["start"] == idx + 1), None)
                if next_group:
                    next_y = y_positions[min(gi + 1, 2)]
                    edge = x + node_w - 25 if gi % 2 == 0 else x + 25
                    parts.append(f'<path d="M {edge} {y+90} C {edge} {y+145},{edge} {next_y-130},{edge} {next_y-62}" fill="none" stroke="#b54e91" stroke-width="7" stroke-opacity=".84" marker-end="url(#arrow)"/>')
                else:
                    if gi % 2 == 0:
                        parts.append(f'<path d="M {x+node_w+14} {y+18} L {ordered_x[1]-18} {y+18}" stroke="#b54e91" stroke-width="7" stroke-opacity=".84" marker-end="url(#arrow)"/>')
                    else:
                        parts.append(f'<path d="M {x-14} {y+18} L {ordered_x[1]+node_w+18} {y+18}" stroke="#b54e91" stroke-width="7" stroke-opacity=".84" marker-end="url(#arrow)"/>')
    parts.append(f'<rect x="255" y="876" width="1090" height="58" rx="29" fill="url(#glass)" stroke="#d4b2d0" stroke-width="2"/>')
    parts.append(text_block(800, 914, [compact(" → ".join(s["label"] for s in stages), 58)], 22, 780, "#3d2854", "middle"))
    parts.append('</svg>')
    return "".join(parts)


def main() -> None:
    records = json.loads(BLUEPRINTS.read_text(encoding="utf-8"))
    for directory in OUT.values():
        directory.mkdir(parents=True, exist_ok=True)
    manifest = []
    for record in records:
        structure = build_structure(record)
        (OUT["style2"] / f'{record["id"]}.svg').write_text(render_style2(record, structure), encoding="utf-8")
        (OUT["style3"] / f'{record["id"]}.svg').write_text(render_style3(record, structure), encoding="utf-8")
        manifest.append({"id": record["id"], "title": record["title"], **structure})
    (ROOT / "public" / "illustrations" / "mindmap-text-only-structure.json").write_text(
        json.dumps(manifest, ensure_ascii=False, indent=2), encoding="utf-8"
    )
    print(f"Rendered {len(records) * 2} SVGs from text only")


if __name__ == "__main__":
    main()
