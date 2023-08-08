import * as THREE from "three"

// 创建一个空的几何体顶点对象
const geometry = new THREE.PlaneGeometry(50,50)

// 创建一个纹理加载器对象
const loadTexture = new THREE.TextureLoader()
const texture = loadTexture.load('../assets/corner-left-up.png')

const material = new THREE.MeshLambertMaterial({
  // color: 0x00ffff,
  map: texture,
  transparent: true
})

const mesh = new THREE.Mesh(geometry, material)
mesh.rotateX(-Math.PI/2)
mesh.position.y += 1;

export default mesh
