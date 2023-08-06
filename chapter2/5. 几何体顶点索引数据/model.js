import * as THREE from 'three'

// 创建一个空的几何体顶点对象
const geometry = new THREE.BufferGeometry()

//类型化数组创建顶点数据
const vertices = new Float32Array([
  0, 0, 0, //顶点1坐标
  80, 0, 0, //顶点2坐标
  80, 80, 0, //顶点3坐标

  // 0, 0, 0, //顶点4坐标, 和顶点 1 相同
  // 80, 80, 0, //顶点5坐标, 和顶点 3 相同
  0, 80, 0, //顶点6坐标
])

// 创建属性缓冲区对象
//3个为一组，表示一个顶点的xyz坐标
const attribute = new THREE.BufferAttribute(vertices, 3)
// 设置几何体attributes属性的位置属性
geometry.attributes.position = attribute;

// Uint16Array类型数组创建顶点索引数据
const indexes = new Uint16Array([
  0,1,2, 0,2,3
])
// 几何体顶点索引的定义
geometry.index = new THREE.BufferAttribute(indexes, 1) // 1个为 1 组

const material = new THREE.MeshBasicMaterial({
  color: 0x00ffff, // 材质颜色
  // side: THREE.FrontSide, // 默认只有正面可见
  side: THREE.DoubleSide, // 默认只有正面可见
  // side: THREE.BackSide, // 默认只有正面可见
})

const mesh = new THREE.Mesh(geometry, material)

export default mesh