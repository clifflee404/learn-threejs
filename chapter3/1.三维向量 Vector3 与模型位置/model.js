import * as THREE from 'three'

// 创建一个空的几何体顶点对象
const geometry = new THREE.BoxGeometry(50,50,50)
const material = new THREE.MeshLambertMaterial({
  color: 0x00ffff,
  transparent: true,
  opacity: 0.5,
})

const mesh = new THREE.Mesh(geometry, material)

//new THREE.Vector3()实例化一个三维向量对象
const v3 = new THREE.Vector3(100,100,100)
v3.set(50,50,50)
console.log('v3.x', v3.x)

// mesh.position.set(0,100,0)

// mesh.position.x = 100

// mesh.scale.set(2,2,2)
// mesh.scale.x = 3

// mesh.position.x = 100
// mesh.translateX(100) //沿着x轴正方向平移距离100

// const v=new THREE.Vector3(1,1,1)
const v=new THREE.Vector3(1,1,0) // 只在 x 和 y 方向上平移
v.normalize() // 转化为单位向量
console.log('v:',v)
mesh.translateOnAxis(v,100)

export default mesh