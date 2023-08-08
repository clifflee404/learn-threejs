import * as THREE from "three"

// 创建一个空的几何体顶点对象
const geometry = new THREE.PlaneGeometry(1000,1000)

// 创建一个纹理加载器对象
const loadTexture = new THREE.TextureLoader()
const texture = loadTexture.load('../assets/emoji.svg')

// 允许阵列模式
texture.wrapS = THREE.RepeatWrapping;
texture.wrapT = THREE.RepeatWrapping;

// 每个方向阵列多少个 
texture.repeat.set(10,10)

const material = new THREE.MeshLambertMaterial({
  map: texture
})

const mesh = new THREE.Mesh(geometry, material)
// 旋转 90 度
mesh.rotateX(-Math.PI/2)

export default mesh
