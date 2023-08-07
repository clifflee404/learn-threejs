import * as THREE from 'three'

// 创建一个空的几何体顶点对象
const geometry = new THREE.BoxGeometry(50,50,50)
const material = new THREE.MeshLambertMaterial({
  color: 0x00ffff,
  transparent: true,
  opacity: 0.5,
})

const mesh = new THREE.Mesh(geometry, material)

const eu = new THREE.Euler(Math.PI/2, Math.PI, 0)
eu.x = Math.PI
console.log('---eu', eu.x);
console.log('---mesh.rotation:', mesh.rotation)


// mesh.rotation.y = Math.PI/4
// mesh.rotation.y += Math.PI/6

// mesh.rotateZ(-Math.PI/4)
// mesh.rotateY(Math.PI/4)

// 循环动画 见 index.js

const axis = new THREE.Vector3(0,1,0);//向量axis
mesh.rotateOnAxis(axis,Math.PI/8);//绕axis轴旋转π/8

export default mesh