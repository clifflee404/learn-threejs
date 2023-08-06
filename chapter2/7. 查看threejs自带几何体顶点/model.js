import * as THREE from 'three'

// 创建一个空的几何体顶点对象
// const geometry = new THREE.BoxGeometry(100,100, 100) // 长方体
// 参数3,4表示细分数，默认是1,1
// const geometry = new THREE.PlaneGeometry(100,50,2,1) // 矩形平面

// const geometry = new THREE.PlaneGeometry(100,50,2,2) // 矩形平面

// 球体的细分数
// const geometry = new THREE.SphereGeometry(50, 32,16)
// 如果球体细分数比较低，表面就不会那么光滑。
const geometry = new THREE.SphereGeometry(50, 6,6)

console.log('---position', geometry.attributes.position);
console.log('---索引值', geometry.index);

const material =  new THREE.MeshLambertMaterial({
  color: 0x00ffff,
  // side: THREE.DoubleSide,
  wireframe: true, // 线框材质
})

const mesh = new THREE.Mesh(geometry, material)

export default mesh