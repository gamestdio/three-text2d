import THREE = require("three");
import { Text2D } from "./Text2D";

export class SpriteText2D extends Text2D{

  public sprite: THREE.Sprite;

  raycast () {
    return this.sprite.raycast.apply(this.sprite, arguments)
  }

  updateText() {
    this.canvas.drawText(this._text, {
      font: this._font,
      fillStyle: this._fillStyle
    })

    // cleanup previous texture
    this.cleanUp()

    this.texture = new THREE.Texture(this.canvas.canvas);
    this.texture.needsUpdate = true;
    this.applyAntiAlias()

    if (!this.material) {
      this.material = new THREE.SpriteMaterial({ map: this.texture });

    } else {
      this.material.map = this.texture
    }

    if (!this.sprite) {
      this.sprite = new THREE.Sprite( this.material )
      this.add(this.sprite)
    }

    this.sprite.scale.set(this.canvas.width, this.canvas.height, 1)

    this.updateAlign();
  }

  updateAlign() {
    if (this.sprite) {
      this.sprite.center.x = this._align.x * this.canvas.textWidth / this.canvas.width;
      this.sprite.center.y = 1 - (1 - this._align.y) * this.canvas.textHeight / this.canvas.height;
    }
  }

  set align(value: THREE.Vector2) {
    this._align.copy(value);
    this._align.multiplyScalar(0.5);
    this._align.addScalar(0.5);
    this.updateAlign();
  }

}
