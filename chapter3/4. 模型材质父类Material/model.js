import * as THREE from 'three'

// 创建一个空的几何体顶点对象
// const geometry = new THREE.BoxGeometry(50,50,50)
const geometry = new THREE.PlaneGeometry(100,50)
const material = new THREE.MeshLambertMaterial({
  color: 0x00ffff,
  // transparent: true,
  // opacity: 0.5,
})

// material.transparent = true
// material.opacity = 0.5

// material.side = THREE.BackSide
material.side = THREE.DoubleSide
console.log('---side', material.side);

const mesh = new THREE.Mesh(geometry, material)

export default mesh