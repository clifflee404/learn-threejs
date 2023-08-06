import * as THREE from 'three'

// 创建一个空的几何体顶点对象
const geometry = new THREE.BufferGeometry()

//类型化数组创建顶点数据
const vertices = new Float32Array([
  0, 0, 0, //顶点1坐标
  50, 0, 0, //顶点2坐标
  // 200, 0, 0, //顶点2坐标
  0, 100, 0, //顶点3坐标
  0, 0, 10, //顶点4坐标
  0, 0, 100, //顶点5坐标
  50, 0, 10, //顶点6坐标
])

// 创建属性缓冲区对象
//3个为一组，表示一个顶点的xyz坐标
const attribute = new THREE.BufferAttribute(vertices, 3)

// 设置几何体attributes属性的位置属性
geometry.attributes.position = attribute;

const material = new THREE.MeshBasicMaterial({
  color: 0x00ffff, // 材质颜色
  // side: THREE.FrontSide, // 默认只有正面可见
  side: THREE.DoubleSide, // 默认只有正面可见
  // side: THREE.BackSide, // 默认只有正面可见
})

const mesh = new THREE.Mesh(geometry, material)

export default mesh