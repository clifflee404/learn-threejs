import * as THREE from "three"
import { OrbitControls } from "three/addons/controls/OrbitControls.js"
import { GUI } from "three/addons/libs/lil-gui.module.min.js"

// 实例化一个 gui 对象
const gui = new GUI()

const obj = {
  x: 10,
  y: 60,
  scale: 0,
  bool: true,
  
  color: 0x00ffff, // 材质颜色
}

// 测试 gui
// gui.add(obj, 'y', 50, 100)

// setInterval(() => {
//   console.log('x', obj.x)
// }, 900)

// 1. 参数 3/4 数据类型:数字(拖动条)
gui
  .add(obj, "x", 0, 100)
  .name("obj.x")
  .onChange(function (value) {
    mesh.position.x = value
  })

// 2. 参数 3 数据类型: 数组
gui
  .add(obj, "scale", [-100, 0, 100])
  .name("Y 坐标")
  .onChange(function (value) {
    mesh.position.y = value
  })

gui
  .add(obj, "scale", {
    left: -100,
    center: 0,
    right: 100,
  })
  .name("X 轴方位选择")
  .onChange(function (value) {
    mesh.position.x = value
  })

// checkbox
gui
  .add(obj, "bool")
  .name("是否旋转")
  .onChange((value) => {
    console.log("---bool", value)
  })

// .addColor()生成颜色值改变的交互界面
gui.addColor(obj, "color").onChange(function (value) {
  console.log("---colorChange", value)
  mesh.material.color.set(value)
})

/**
 * 创建一个三维场景
 */
const scene = new THREE.Scene()

/**
 * 创建网格模型
 */
// 给三维场景添加物体,定义一个长方体
const geometry = new THREE.BoxGeometry(100, 100, 100)

// 创建一个材质对象 : MeshBasicMaterial 不受光照影响, MeshLambertMaterial 受光照影响
const material = new THREE.MeshLambertMaterial({
  color: 0x00ffff, // 设置材质颜色
  // transparent: true, // 开启透明
  // opacity: 0.5, // 设置透明度
})

// Mesh:网格模型 表示物体和外观, 创建一个网格模型:表示生活中的物体,有形状/颜色/外观
const mesh = new THREE.Mesh(geometry, material)
// 设置网格模型在三维空间中的位置坐标, 默认是坐标原点
// mesh.position.set(0,10,0)

// 把物体 Mesh 添加到场景中, 把网格模型添加到场景中
scene.add(mesh)
// console.log('---mesh', mesh);

gui.add(mesh.position, "x", 0, 180)
gui.add(mesh.position, "y", 0, 180)
gui.add(mesh.position, "z", 0, 180)

// 创建一个三维坐标轴, rgb 分别对应 xyz 轴
const axesHelper = new THREE.AxesHelper(100)
scene.add(axesHelper)

/**
 * 要有光
 */
// 添加一个平行光
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8)
directionalLight.position.set(600, 500, 700)
// directionalLight.position.set(100,100,100) // 在立方体对角线上,三个面一样,看不清楚棱边
// directionalLight.target = mesh // 默认坐标原点
scene.add(directionalLight)

// 可视化平行光
const dirLightHelper = new THREE.DirectionalLightHelper(
  directionalLight,
  15,
  0xffff00
)
scene.add(dirLightHelper)

// 添加一个环境光
const ambient = new THREE.AmbientLight(0xffffff, 0.2)
scene.add(ambient)

console.log("ambient.intensity:", ambient.intensity)
// 通过 gui 改变环境光照强度
gui.add(directionalLight, "intensity", 0, 2.0).name("平行光强度").step(0.1)
gui.add(ambient, "intensity", 0, 2.0).name("环境光强度").step(0.1)


// 定义相机输出画布的好吵是你(单位:px)
const width = window.innerWidth
const height = window.innerHeight

/**
 * 透视投影相机设置
 */
// 设置相机的 四个参数 fov:视场角度, aspect:画布宽高比, near:近裁截面, far:远裁截面
// 视锥体空间内的物品才能被看到
// 创建一个 透视投影相机对象
const camera = new THREE.PerspectiveCamera(30, width / height, 0.1, 3000)

//相机在 Three.js 三维坐标系中的位置
camera.position.set(500, 400, 300)

// get: 定义相机的视线 观察目标点的坐标, 两个坐标定义一条线, 就是视线的方向
camera.lookAt(0, 0, 0) // 坐标原点

/**
 * 创建一个 WebGL 渲染器
 */
const renderer = new THREE.WebGLRenderer({
  antialias: true, // 启用抗锯齿
})
renderer.setSize(width, height) // canvas 画布的宽高度
// 获取你屏幕对应的设备像素比.devicePixelRatio告诉threejs,以免渲染模糊问题
renderer.setPixelRatio(window.devicePixelRatio)
// 执行一个渲染操作,类比相机的拍照动作, 咔
// renderer.render(scene, camera)

// 把渲染结果 canvas 画布, 也就是所谓的"照片", 添加到网页页面上
document.body.appendChild(renderer.domElement)

function render() {
  if (obj.bool) {
    mesh.rotateY(0.01) // 周期性旋转, 每次旋转 0.01 弧度
  }
  renderer.render(scene, camera) // 周期性执行相机的渲染功能,更新 canvas 画布上的内容
  requestAnimationFrame(render)
}
render()

const controls = new OrbitControls(camera, renderer.domElement)

// 有渲染循环动画执行时,不需要重新 render
// controls.addEventListener('change', function(){
//   renderer.render(scene, camera)
// })

// onresize 事件会在窗口被调整大小时发生
window.onresize = function () {
  // 重置渲染器输出画布canvas尺寸
  renderer.setSize(window.innerWidth, window.innerHeight)
  // 全屏情况下：设置观察范围长宽比aspect为窗口宽高比
  camera.aspect = window.innerWidth / window.innerHeight
  // 渲染器执行render方法的时候会读取相机对象的投影矩阵属性projectionMatrix
  // 但是不会每渲染一帧，就通过相机的属性计算投影矩阵(节约计算资源)
  // 如果相机的一些属性发生了变化，需要执行updateProjectionMatrix ()方法更新相机的投影矩阵
  camera.updateProjectionMatrix()
}
