import * as THREE from "three"

// 创建一个空的几何体顶点对象
// const geometry = new THREE.PlaneGeometry(226, 108)
const geometry = new THREE.SphereGeometry(50)
// const geometry = new THREE.BoxGeometry(50, 50 , 50)


// 创建一个纹理加载器对象
const loadTexture = new THREE.TextureLoader()
const texture = loadTexture.load('../assets/earth.jpeg')

const material = new THREE.MeshLambertMaterial({
  // color: 0x00ffff,
  // map: texture
})

material.map = texture

const mesh = new THREE.Mesh(geometry, material)

export default mesh
