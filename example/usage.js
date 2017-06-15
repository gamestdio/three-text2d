var THREE = require('three');
var OrbitControls = require('three-orbit-controls')(THREE);

var THREE_Text = require('../src/index');

var WIDTH = window.innerWidth , HEIGHT = window.innerHeight

var MeshText2D = THREE_Text.MeshText2D;
var SpriteText2D = THREE_Text.SpriteText2D;
var textAlign = THREE_Text.textAlign;

var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();

function Application (container) {
  this.container = container;

  this.camera = new THREE.PerspectiveCamera(60, WIDTH / HEIGHT, 1, 5000),
  this.camera.position.set(0, 0, 500)

  this.controls = new OrbitControls(this.camera)

  this.renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true,
  })
  this.renderer.setSize(WIDTH, HEIGHT)
  this.renderer.setClearColor(0xffff00)
  this.container.appendChild(this.renderer.domElement)

  this.scene = new THREE.Scene();

  this.texts = []

  var text = this.generateText("TEXTURE", false, {
    align: textAlign.center,
    shadowColor: 'rgba(0, 0, 0, 0.2)',
    shadowBlur: 3,
    shadowOffsetX: 2,
    shadowOffsetY: 2
  })
  text.position.set(0,0,0)

  text = this.generateText("T LEFT", false, { align: textAlign.left })
  text.position.set(0,100,0)

  text = this.generateText("T RIGHT", false, { align: textAlign.left })
  text.position.set(0,200,0)

  text = this.generateText("SPRITE", true, {
    align: textAlign.center,
    shadowColor: 'rgba(0, 0, 0, 0.2)',
    shadowBlur: 3,
    shadowOffsetX: 2,
    shadowOffsetY: 2
  })
  text.position.set(0,300,0)

  text = this.generateText("S LEFT", true, { align: textAlign.left })
  text.position.set(0,400,0)

  text = this.generateText("S RIGHT", true, { align: textAlign.right })
  text.position.set(0,400,0)

  var i = 0
  setInterval(() => {
    for (var j = 0; j < this.texts.length; j++) {
      this.texts[j].text = this.texts[j].originalText + " " + i
    }
    i++
  }, 50)

  window.addEventListener('resize', this.onResize.bind(this), false)
  window.addEventListener('mousemove', this.onMouseMove.bind(this), false)
}

Application.prototype.generateText = function(text, isSprite, otherOptions) {
  var textClass = isSprite ? SpriteText2D : MeshText2D;
  var obj = new textClass(
    text, 
    Object.assign({ font: '30px Arial', fillStyle: '#000000' }, otherOptions)
  )
  obj.originalText = text
  obj.material.alphaTest = 0.1
  obj.scale.set(1.5,1.5,1.5)
  this.texts.push(obj)
  this.scene.add(obj)
  return obj
}

Application.prototype.onResize = function (e) {
  WIDTH = window.innerWidth
  HEIGHT = window.innerHeight

  this.renderer.setSize(WIDTH, HEIGHT)
  this.camera.aspect = WIDTH / HEIGHT
  this.camera.updateProjectionMatrix()
}

Application.prototype.onMouseMove = function (event) {
  mouse.x = ( event.clientX / window.innerWidth  ) * 2 - 1;
  mouse.y = - ( event.clientY / window.innerHeight  ) * 2 + 1;
}

Application.prototype.loop = function () {
  for (var j = 0; j < this.texts.length; j++) {
    var text = this.texts[j]
    text.rotation.y += text.position.y * 0.00001
  }

  // update the picking ray with the camera and mouse position
  raycaster.setFromCamera( mouse, this.camera );

  // calculate objects intersecting the picking ray
  var intersects = raycaster.intersectObjects( this.scene.children );

  for ( var i = 0; i < intersects.length; i++ ) {
    console.log("found:", intersects[ i ].object)
  }

  this.renderer.render(this.scene, this.camera)
  requestAnimationFrame(this.loop.bind(this))
}

var app = new Application(document.body)
app.loop()
