from pathlib import Path

from PIL import Image, ImageChops, ImageEnhance, ImageFilter


ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "archive" / "source-images" / "mindmaps"
STYLE_2 = ROOT / "archive" / "legacy-visuals" / "mindmaps-style2"
STYLE_3 = ROOT / "archive" / "legacy-visuals" / "mindmaps-style3"


def radial_glow(size: tuple[int, int], center: tuple[float, float], color: tuple[int, int, int], strength: int) -> Image.Image:
    width, height = size
    sample_width, sample_height = 96, max(48, round(96 * height / width))
    mask = Image.new("L", (sample_width, sample_height), 0)
    pixels = mask.load()
    cx, cy = center[0] * sample_width, center[1] * sample_height
    radius = max(sample_width, sample_height) * 0.72
    for y in range(sample_height):
        for x in range(sample_width):
            distance = ((x - cx) ** 2 + (y - cy) ** 2) ** 0.5
            pixels[x, y] = max(0, int(strength * (1 - distance / radius)))
    mask = mask.resize(size, Image.Resampling.BICUBIC)
    layer = Image.new("RGBA", size, (*color, 0))
    layer.putalpha(mask.filter(ImageFilter.GaussianBlur(radius=max(24, width // 24))))
    return layer


def add_mist(image: Image.Image, glows: list[tuple[tuple[float, float], tuple[int, int, int], int]]) -> Image.Image:
    base = image.convert("RGBA")
    for center, color, strength in glows:
        base = Image.alpha_composite(base, radial_glow(base.size, center, color, strength))
    return base.convert("RGB")


def style_2(source: Image.Image) -> Image.Image:
    image = source.convert("RGB")
    image = ImageEnhance.Color(image).enhance(0.50)
    image = ImageEnhance.Contrast(image).enhance(0.93)
    image = Image.blend(image, Image.new("RGB", image.size, (252, 251, 250)), 0.23)
    image = add_mist(image, [
        ((0.03, 0.78), (135, 193, 255), 34),
        ((0.98, 0.76), (255, 164, 213), 31),
        ((0.53, 0.52), (196, 174, 255), 18),
    ])
    return ImageEnhance.Sharpness(image).enhance(1.08)


def style_3(source: Image.Image) -> Image.Image:
    image = source.convert("RGB")
    image = ImageEnhance.Color(image).enhance(0.72)
    image = ImageEnhance.Brightness(image).enhance(0.96)
    image = ImageEnhance.Contrast(image).enhance(1.06)
    image = Image.blend(image, Image.new("RGB", image.size, (241, 237, 236)), 0.12)
    image = add_mist(image, [
        ((0.12, 0.12), (255, 194, 182), 22),
        ((0.88, 0.20), (198, 172, 255), 30),
        ((0.82, 0.92), (124, 209, 255), 24),
        ((0.20, 0.86), (242, 155, 219), 26),
    ])
    detail = image.filter(ImageFilter.UnsharpMask(radius=2.2, percent=115, threshold=5))
    image = Image.blend(image, detail, 0.28)
    edge = image.filter(ImageFilter.FIND_EDGES).filter(ImageFilter.GaussianBlur(0.7))
    edge = ImageEnhance.Brightness(edge).enhance(0.22)
    return ImageChops.screen(image, edge)


def main() -> None:
    STYLE_2.mkdir(parents=True, exist_ok=True)
    STYLE_3.mkdir(parents=True, exist_ok=True)
    sources = sorted(SOURCE.glob("*.png"))
    for path in sources:
        with Image.open(path) as opened:
            original = opened.convert("RGB")
            style_2_path = STYLE_2 / path.name
            style_3_path = STYLE_3 / path.name
            if not style_2_path.exists():
                style_2(original).save(style_2_path, format="PNG", optimize=True)
            if not style_3_path.exists():
                style_3(original).save(style_3_path, format="PNG", optimize=True)
    print(f"Generated {len(sources)} style-2 and {len(sources)} style-3 mind maps")


if __name__ == "__main__":
    main()
