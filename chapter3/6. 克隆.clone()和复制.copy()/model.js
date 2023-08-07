import * as THREE from 'three'

// 创建一个空的几何体顶点对象
const geometry = new THREE.BoxGeometry(50,50,50)
const material = new THREE.MeshLambertMaterial({
  color: 0x00ffff,
  // transparent: true,
  // opacity: 0.5,
})

const mesh = new THREE.Mesh(geometry, material)

const v1 = new THREE.Vector3(1,2,3)
console.log('v1:', v1)

// clone
const v2 = v1.clone()
console.log('---v2', v2);

// copy
const v3 = new THREE.Vector3(4, 5, 6);
//读取v1.x、v1.y、v1.z的赋值给v3.x、v3.y、v3.z
v3.copy(v1);


const mesh2 = mesh.clone()
mesh2.position.x = 100

// 使用 clone 方法,改变 mesh2 的材质,mesh 的材质不会再改变
mesh2.material = mesh.material.clone()
// 改变材质颜色，或者说改变mesh2颜色，mesh和mesh2颜色都会改变
mesh2.material.color.set(0xffff00)

//将 mesh 移动到 mesh2 y 轴上方 100 的位置
mesh.position.copy(mesh2.position) // 位置 相同
mesh.position.y += 100

export {mesh, mesh2}