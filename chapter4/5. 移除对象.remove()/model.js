import * as THREE from "three"

// 创建一个空的几何体顶点对象
const geometry = new THREE.BoxGeometry(20, 20, 20)
const material = new THREE.MeshLambertMaterial({
  color: 0x00ffff,
})
const mesh1 = new THREE.Mesh(geometry, material)
const mesh2 = new THREE.Mesh(geometry, material)
mesh2.translateX(50)

const group = new THREE.Group()
group.add(mesh1)
group.add(mesh2)

// group.remove(mesh1)
// 一次移除多个
// group.remove(mesh1, mesh2)

console.log('---group.children', group.children);

export default group
