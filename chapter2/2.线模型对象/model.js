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


// // 材质
// const material = new THREE.PointsMaterial({
//   color: 0xff0000,
//   // size: 20 //点对象像素尺寸
// }); 

// // 定义了一个点模型对象
// const points = new THREE.Points(geometry, material); //点模型对象


// export  default points

const material = new THREE.LineBasicMaterial({
  color: 0x00ffff, // 黄色线条
})

// const line = new THREE.Line(geometry, material)

// const line = new THREE.LineLoop(geometry, material)

const line = new THREE.LineSegments(geometry, material)

export default line