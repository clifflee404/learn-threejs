import * as THREE from 'three'

// 创建一个空的几何体顶点对象
const geometry = new THREE.BufferGeometry()

//类型化数组创建顶点数据
const vertices = new Float32Array([
  0, 0, 0, //顶点1坐标
  80, 0, 0, //顶点2坐标
  80, 80, 0, //顶点3坐标

  0, 0, 0, //顶点4坐标, 和顶点 1 相同
  80, 80, 0, //顶点5坐标, 和顶点 3 相同
  0, 80, 0, //顶点6坐标
])

// 创建属性缓冲区对象
//3个为一组，表示一个顶点的xyz坐标
const attribute = new THREE.BufferAttribute(vertices, 3)
// 设置几何体attributes属性的位置属性
geometry.attributes.position = attribute;

// 矩形平面，无索引，两个三角形，6个顶点
// 每个顶点的法线数据和顶点位置数据一一对应
const normals = new Float32Array([
  0, 0, 1, //顶点1法线( 法向量 )
  0, 0, 1, //顶点2法线
  0, 0, 1, //顶点3法线
  0, 0, 1, //顶点4法线
  0, 0, 1, //顶点5法线
  0, 0, 1, //顶点6法线
]);
// 设置几何体的顶点法线属性.attributes.normal
geometry.attributes.normal = new THREE.BufferAttribute(normals, 3); 

// 有顶点索引的情况: 
// 矩形平面，有索引，两个三角形，有2个顶点重合，有4个顶点
// 每个顶点的法线数据和顶点位置数据一一对应
// const normals = new Float32Array([
//   0, 0, 1, //顶点1法线( 法向量 )
//   0, 0, 1, //顶点2法线
//   0, 0, 1, //顶点3法线
//   0, 0, 1, //顶点4法线
// ]);
// // 设置几何体的顶点法线属性.attributes.normal
// geometry.attributes.normal = new THREE.BufferAttribute(normals, 3);

// MeshBasicMaterial 不受光照影响, MeshLambertMaterial 受光照影响,
const material = new THREE.MeshLambertMaterial({
  color: 0x00ffff, // 材质颜色
  // side: THREE.FrontSide, // 默认只有正面可见
  side: THREE.DoubleSide, // 默认只有正面可见
  // side: THREE.BackSide, // 默认只有正面可见
})

const mesh = new THREE.Mesh(geometry, material)

export default mesh