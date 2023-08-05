import * as THREE from 'three';
/**
 * 4. 第一个3D案例—创建3D场景
 * 5. 第一个3D案例—透视投影相机
 * 6. 第一个3D案例—渲染器
 * 7. 三维坐标系-加强三维空间认识
 */

/**
 * 创建一个三维场景
 */
const scene = new  THREE.Scene()

/**
 * 创建网格模型
 */
// 给三维场景添加物体,定义一个长方体
const geometry = new THREE.BoxGeometry(50,50,50)

// 创建一个材质对象
const material = new THREE.MeshBasicMaterial({
  color: 0x0000ff, // 设置材质颜色
  transparent: true, // 开启透明
  opacity: 0.5, // 设置透明度
})

// Mesh:网格模型 表示物体和外观
// 创建一个网格模型:表示生活中的物体,有形状/颜色/外观
const mesh = new THREE.Mesh(geometry, material)
// 设置网格模型在三维空间中的位置坐标, 默认是坐标原点 
mesh.position.set(0,10,0)

// 把物体 Mesh 添加到场景中, 把网格模型添加到场景中
scene.add(mesh)
// console.log('---mesh', mesh);

// 创建一个三维坐标轴, rgb 分别对应 xyz 轴
const axesHelper = new THREE.AxesHelper(100)
scene.add(axesHelper)

// 定义相机输出画布的好吵是你(单位:px)
const width = 600
const height = 400

/**
 * 透视投影相机设置
 */
// 设置相机的 四个参数 fov:视场角度, aspect:画布宽高比, near:近裁截面, far:远裁截面
// 视锥体空间内的物品才能被看到
// 创建一个 透视投影相机对象
const camera = new THREE.PerspectiveCamera(30, width/height, 0.1, 3000)
// const camera = new THREE.PerspectiveCamera(30, width/height, 0.1, 300) // 远裁截面没有包含 mesh 的情况
//相机在 Three.js 三维坐标系中的位置
camera.position.set(200,200,200)
// camera.position.set(-1000,0,0)

// get: 定义相机的视线 观察目标点的坐标, 两个坐标定义一条线, 就是视线的方向
camera.lookAt(0,0,0) // 坐标原点
// camera.lookAt(0,10,0) // y轴上的一点
// camera.lookAt(mesh.position) // 指向网格模型



/**
 * 创建一个 WebGL 渲染器
 */
const renderer = new THREE.WebGLRenderer()
renderer.setSize(width, height) // canvas 画布的宽高度

// 执行一个渲染操作,类比相机的拍照动作, 咔
renderer.render(scene, camera)

// 把渲染结果 canvas 画布, 也就是所谓的"照片", 添加到网页页面上
document.body.appendChild(renderer.domElement)
// 改变 canvas 的位置
// document.getElementById("webgl").appendChild(renderer.domElement)

