import * as THREE from "three"
import { OrbitControls } from "three/addons/controls/OrbitControls.js"

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
  transparent: true, // 开启透明
  opacity: 0.5, // 设置透明度
})

// Mesh:网格模型 表示物体和外观, 创建一个网格模型:表示生活中的物体,有形状/颜色/外观
// const mesh = new THREE.Mesh(geometry, material)
// 设置网格模型在三维空间中的位置坐标, 默认是坐标原点
// mesh.position.set(0,10,0)
// 把物体 Mesh 添加到场景中, 把网格模型添加到场景中
// scene.add(mesh)

// 沿着 x 轴阵列多个立方体网格模型
// for(let i=0; i<10;i++){
//   const mesh = new THREE.Mesh(geometry, material)
//   mesh.position.set(i*200, 0, 0) // 沿着 x 轴阵列分布
//   scene.add(mesh)
// }

for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    const mesh = new THREE.Mesh(geometry, material)
    mesh.position.set(i * 200, 0, j * 200) // 沿着 x 轴阵列分布
    scene.add(mesh)
  }
}

// 创建一个三维坐标轴, rgb 分别对应 xyz 轴
const axesHelper = new THREE.AxesHelper(100)
scene.add(axesHelper)

/**
 * 要有光
 */
// 创建一个点光源
const pointLight = new THREE.PointLight(0xffffff, 1)
// 点光源的位置
// pointLight.position.set(400,0,0) // 放在 x 轴上
pointLight.position.set(1000, 1000, 1000)
// 把光源添加到三维场景中
scene.add(pointLight)

// 定义相机输出画布的好吵是你(单位:px)
const width = 600
const height = 400

/**
 * 透视投影相机设置
 */
// 设置相机的 四个参数 fov:视场角度, aspect:画布宽高比, near:近裁截面, far:远裁截面
// 视锥体空间内的物品才能被看到
// 创建一个 透视投影相机对象
// const camera = new THREE.PerspectiveCamera(30, width / height, 0.1, 4000)
const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 4000)

//相机在 Three.js 三维坐标系中的位置
// camera.position.set(200, 200, 200)
camera.position.set(2000, 2000, 2000)

// get: 定义相机的视线 观察目标点的坐标, 两个坐标定义一条线, 就是视线的方向
// camera.lookAt(0, 0, 0) // 坐标原点
camera.lookAt(1000, 0, 1000) // 坐标原点

/**
 * 创建一个 WebGL 渲染器
 */
const renderer = new THREE.WebGLRenderer()
renderer.setSize(width, height) // canvas 画布的宽高度

// 执行一个渲染操作,类比相机的拍照动作, 咔
renderer.render(scene, camera)

// 把渲染结果 canvas 画布, 也就是所谓的"照片", 添加到网页页面上
document.body.appendChild(renderer.domElement)

const controls = new OrbitControls(camera, renderer.domElement)
controls.target.set(1000,0,1000)
controls.update()

controls.addEventListener("change", function () {
  // console.log('---camara.position', camera.position)
  renderer.render(scene, camera)
})
