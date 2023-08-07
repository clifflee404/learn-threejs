import * as THREE from "three"

// 创建一个空的几何体顶点对象
const geometry = new THREE.BoxGeometry(20, 20, 20)
const material = new THREE.MeshLambertMaterial({
  color: 0x00ffff,
  // transparent: true,
  // opacity: 0.5,
})

const mesh1 = new THREE.Mesh(geometry, material)
const mesh2 = new THREE.Mesh(geometry, material)
mesh2.translateX(25)

// const group = new THREE.Group()
//Object3D表示模型对象节点
const group = new THREE.Object3D()

// group.add(mesh1);
// group.add(mesh2);

// group.add(mesh1, mesh2)
group.add(mesh1)
// mesh也能添加mesh子对象
mesh1.add(mesh2)

// 分组之后有什么用?
// 父对象旋转缩放平移变换，子对象跟着变化
// mesh1.translateY(50)
// mesh2.translateY(50)

group.translateY(50)
group.scale.set(2, 2, 2)
group.rotateY(Math.PI / 4)

console.log("---查看 group 的子对象", group.children)
export default group
