import * as THREE from "three"

// 创建一个空的几何体顶点对象
// const geometry = new THREE.PlaneGeometry(226, 108)
const geometry = new THREE.CircleGeometry(50) // 圆形几何体
console.log('---默认 UV', geometry.attributes.uv);



// 创建一个纹理加载器对象
const loadTexture = new THREE.TextureLoader()
// const texture = loadTexture.load('../assets/earth.jpeg')
const texture = loadTexture.load('../assets/emoji.svg')

const material = new THREE.MeshLambertMaterial({
  map: texture
})


const mesh = new THREE.Mesh(geometry, material)

export default mesh
