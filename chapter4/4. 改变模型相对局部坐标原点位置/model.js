import * as THREE from "three"

// 创建一个空的几何体顶点对象
const geometry = new THREE.BoxGeometry(50, 50, 50)
const material = new THREE.MeshLambertMaterial({
  color: 0x00ffff,
})
const mesh = new THREE.Mesh(geometry, material)

const group = new THREE.Group()
group.add(mesh)
group.position.x = 100

geometry.translate(50/2,0,0)
// mesh.rotateY(Math.PI/4)

// 局部坐标系
const meshAxesHelper = new THREE.AxesHelper(50)
mesh.add(meshAxesHelper)

export default group
