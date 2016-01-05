three-text2d
===

Render texture from canvas into THREE's Mesh or Sprite.

TODO: Fix sprite scale and alignment.

Usage
---

**Mesh**

```javascript
var text = new Text2D("RIGHT", { align: textAlign.right, font: '30px Arial', fillStyle: '#000000', antialias: true })
text.position.set(0,-100,0)
text.scale.set(1.5,1.5,1.5)
scene.add(text)
```

**Sprite**

```javascript
var sprite = new SpriteText2D("SPRITE", { align: textAlign.center,  font: '40px Arial', fillStyle: '#000000' , antialias: false })
sprite.position.set(0,0,0)
scene.add(sprite)
```

License
---

MIT
