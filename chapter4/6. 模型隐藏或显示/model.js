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

// mesh1.visible =false;// 隐藏一个网格模型，visible的默认值是true
// group.visible =false;// 隐藏一个包含多个模型的组对象group
// mesh1.visible =true;// 使网格模型mesh处于显示状态

// 隐藏网格模型mesh，visible的默认值是true
// material.visible =false;
// mesh1.material.visible =false;
// 注意如果mesh2和mesh的.material属性指向同一个材质，mesh2也会跟着mesh隐藏

// 如果不想 mesh1 和 mesh2 的 material 相关联
mesh1.material = material.clone()
mesh1.material.visible = false
mesh2.material.visible = false

export default group
