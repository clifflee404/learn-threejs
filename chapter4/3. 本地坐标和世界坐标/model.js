import * as THREE from "three"

// 创建一个空的几何体顶点对象
const geometry = new THREE.BoxGeometry(20, 20, 20)
const material = new THREE.MeshLambertMaterial({
  color: 0x00ffff,
})
const mesh = new THREE.Mesh(geometry, material)
mesh.position.x = 50

const group = new THREE.Group()
group.add(mesh)
group.position.x = 50

// 读取世界坐标
const worldPosition = new THREE.Vector3()

mesh.getWorldPosition(worldPosition)

console.log('---世界坐标', worldPosition);
console.log('---本地坐标', mesh.position);

// 局部坐标系
const meshAxesHelper = new THREE.AxesHelper(50)
mesh.add(meshAxesHelper)
// 局部坐标系会跟着 mesh 走
mesh.position.y = 100
export default group
