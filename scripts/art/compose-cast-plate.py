# Composes living-cast-portraits.webp (the Servitor plate) from Platform portrait cutouts over a softened Lanternbough trading post. Run from the Forboc.AI root: python3 forbocai.github.io/scripts/art/compose-cast-plate.py
from PIL import Image, ImageFilter, ImageEnhance
W,H=1672,941
bg=Image.open('Lanternbough/environments/images/trading-post.png').convert('RGB')
bg=bg.resize((W,W)).crop((0,(W-H)//2,W,(W-H)//2+H)).filter(ImageFilter.GaussianBlur(14))
bg=ImageEnhance.Brightness(bg).enhance(0.6)
canvas=bg.convert('RGBA')
P='Platform/public/assets/'
def place(name,cx,s,dim=1.0):
    im=Image.open(P+name+'_thumbnail.png').convert('RGBA')
    im=im.crop(im.getbbox())
    h=int(H*s); w=int(im.width*h/im.height)
    im=im.resize((w,h),Image.LANCZOS)
    if dim<1:
        r,g,b,a=im.split(); rgb=ImageEnhance.Brightness(Image.merge('RGB',(r,g,b))).enhance(dim); im=Image.merge('RGBA',(*rgb.split(),a))
    canvas.alpha_composite(im,(int(cx*W-w/2),H-h+int(H*0.03)))
for n,x in [('character_profile/troll_bridgeholds',0.1),('character_profile/bridgekeeper',0.9)]:
    place(n,x,0.66,0.72)
for n,x in [('vendor_profile/scout',0.23),('vendor_profile/tea_alchemist',0.5),('vendor_profile/tinker_trader',0.77)]:
    place(n,x,0.78)
canvas.convert('RGB').save('forbocai.github.io/living-cast-portraits.webp',quality=82)
