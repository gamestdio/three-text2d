three-text2d
===

Render texture from canvas into THREE's Mesh or Sprite.

<a target='_blank' rel='nofollow' href='https://app.codesponsor.io/link/Pa34TYK6ySj3zGr7u124Dgnn/gamestdio/three-text2d'>
  <img alt='Sponsor' width='888' height='68' src='https://app.codesponsor.io/embed/Pa34TYK6ySj3zGr7u124Dgnn/gamestdio/three-text2d.svg' />
</a>

Usage
---

**Mesh**

```javascript
import { MeshText2D, textAlign } from 'three-text2d'

var text = new MeshText2D("RIGHT", { align: textAlign.right, font: '30px Arial', fillStyle: '#000000', antialias: true })
scene.add(text)
```

**Sprite**

```javascript
import { SpriteText2D, textAlign } from 'three-text2d'

var sprite = new SpriteText2D("SPRITE", { align: textAlign.center,  font: '40px Arial', fillStyle: '#000000' , antialias: false })
scene.add(sprite)
```

License
---

MIT
