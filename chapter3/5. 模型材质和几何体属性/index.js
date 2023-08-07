import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import {mesh, mesh2} from './model.js'

/**
 * 创建一个三维场景
 */
const scene = new  THREE.Scene()
scene.add(mesh, mesh2)

// 创建一个三维坐标轴, rgb 分别对应 xyz 轴
const axesHelper = new THREE.AxesHelper(100)
scene.add(axesHelper)


/**
 * 要有光
 */
// 添加一个平行光
const directionalLight = new THREE.DirectionalLight(0xffffff, 1.0)
directionalLight.position.set(500,600,700)
// directionalLight.position.set(100,100,100) // 在立方体对角线上,三个面一样,看不清楚棱边
// directionalLight.target = mesh // 默认坐标原点
scene.add(directionalLight)

// 可视化平行光
const dirLightHelper = new THREE.DirectionalLightHelper(directionalLight, 15, 0xffff00)
scene.add(dirLightHelper)

// 添加一个环境光
const ambient = new THREE.AmbientLight(0xffffff, 0.2)
scene.add(ambient)



// 定义相机输出画布的好吵是你(单位:px)
const width = window.innerWidth
const height = window.innerHeight

/**
 * 透视投影相机设置
 */
// 设置相机的 四个参数 fov:视场角度, aspect:画布宽高比, near:近裁截面, far:远裁截面
// 视锥体空间内的物品才能被看到
// 创建一个 透视投影相机对象
const camera = new THREE.PerspectiveCamera(30, width/height, 0.1, 3000)

//相机在 Three.js 三维坐标系中的位置
// camera.position.set(600,600,600)
camera.position.set(0,0,600)

// get: 定义相机的视线 观察目标点的坐标, 两个坐标定义一条线, 就是视线的方向
camera.lookAt(0,0,0) // 坐标原点


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

const controls = new OrbitControls(camera, renderer.domElement)


function render() {
  // model.rotation.y += 0.01
  // model.rotateY(0.01);
  renderer.render(scene, camera) // 周期性执行相机的渲染功能,更新 canvas 画布上的内容
  requestAnimationFrame(render)
}
render()

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
