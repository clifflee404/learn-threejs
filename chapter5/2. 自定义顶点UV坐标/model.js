import * as THREE from "three"

const geometry = new THREE.BufferGeometry()

const vertices = new Float32Array([
  0,0,0, // 顶点 1
  160, 0, 0, // 顶点 2
  160, 80, 0, // 顶点 3
  0, 80, 0, // 顶点 4
])

const attribute = new THREE.BufferAttribute(vertices, 3)
geometry.attributes.position = attribute

const indexes = new Uint16Array([
  0,1,2,0,2,3,
])
geometry.index = new THREE.BufferAttribute(indexes, 1)

// 顶点UV坐标的作用是从纹理贴图上提取像素映射到网格模型Mesh的几何体表面上。
const uvs = new Float32Array([
  0,0,
  1,0,
  1,1,
  0,1
])
const uvs2 = new Float32Array([
  0, 0, 
  0.5, 0, 
  0.5, 0.5, 
  0, 0.5, 
]);
// geometry.attributes.uv = new THREE.BufferAttribute(uvs, 2)
geometry.attributes.uv = new THREE.BufferAttribute(uvs2, 2)

// 创建一个纹理加载器对象
const loadTexture = new THREE.TextureLoader()
const texture = loadTexture.load('../assets/earth.jpeg')

const material = new THREE.MeshBasicMaterial({
  // color: 0x00ffff,
  map: texture
})

const mesh = new THREE.Mesh(geometry, material)

export default mesh
