"""Generate QR codes with the trident logo in the center.
Usage: python3 make-qr.py  (run with the venv that has qrcode[pil] installed)
"""
import qrcode
from PIL import Image, ImageDraw, ImageFont

NAVY = "#0d2242"
LOGO = Image.open("logo.jpg").convert("RGB")

def qr_with_logo(url, box=20):
    q = qrcode.QRCode(error_correction=qrcode.constants.ERROR_CORRECT_H, box_size=box, border=4)
    q.add_data(url); q.make(fit=True)
    img = q.make_image(fill_color=NAVY, back_color="white").convert("RGB")
    w = img.width
    # logo tile ~ 24% of the code width, on a white rounded plate so the modules under it are fully covered
    tile = int(w * 0.24)
    plate = Image.new("RGB", (tile, tile), "white")
    mask = Image.new("L", (tile, tile), 0); ImageDraw.Draw(mask).rounded_rectangle([0, 0, tile - 1, tile - 1], radius=tile // 6, fill=255)
    inner = int(tile * 0.86)
    logo = LOGO.resize((inner, inner), Image.LANCZOS)
    plate.paste(logo, ((tile - inner) // 2, (tile - inner) // 2))
    img.paste(plate, ((w - tile) // 2, (w - tile) // 2), mask)
    return img

def captioned(img, line1, line2):
    w = img.width
    canvas = Image.new("RGB", (w, w + 220), "white"); canvas.paste(img, (0, 0)); d = ImageDraw.Draw(canvas)
    f1 = ImageFont.truetype("/System/Library/Fonts/Supplemental/Arial Bold.ttf", 64)
    f2 = ImageFont.truetype("/System/Library/Fonts/Supplemental/Arial.ttf", 40)
    for text, y, f in ((line1, w + 20, f1), (line2, w + 110, f2)):
        tw = d.textlength(text, font=f); d.text(((w - tw) / 2, y), text, fill=NAVY, font=f)
    return canvas

CODES = [
    ("qr", "https://nimblewizard.github.io/poseidon-card/", "Poseidon Solutions", "Scan to save our contact & leave a review"),
    ("qr-water-test", "https://nimblewizard.github.io/poseidon-card/water-test.html", "Free Water Test", "Scan to set an appointment"),
]
for stem, url, l1, l2 in CODES:
    img = qr_with_logo(url)
    img.save(f"{stem}.png"); captioned(img, l1, l2).save(f"{stem}-phone.png")
    print(stem, img.size)
