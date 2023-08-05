import * as THREE from "three"
import { OrbitControls } from "three/addons/controls/OrbitControls.js"
//引入性能监视器stats.js
import Stats from "three/addons/libs/stats.module.js"

const stats = new Stats()
document.body.appendChild(stats.domElement)

/**
 * 创建一个三维场景
 */
const scene = new THREE.Scene()

/**
 * 创建网格模型
 */
// 给三维场景添加物体,定义一个长方体
const geometry = new THREE.BoxGeometry(100, 100, 100)

// 创建一个材质对象
// MeshBasicMaterial 不受光照影响
// MeshLambertMaterial 受光照影响
const material = new THREE.MeshLambertMaterial({
  color: 0x00ffff, // 设置材质颜色
  // transparent: true, // 开启透明
  // opacity: 0.5, // 设置透明度
})

// Mesh:网格模型 表示物体和外观
// 创建一个网格模型:表示生活中的物体,有形状/颜色/外观
const mesh = new THREE.Mesh(geometry, material)
// 设置网格模型在三维空间中的位置坐标, 默认是坐标原点
// mesh.position.set(0,10,0)

// 把物体 Mesh 添加到场景中, 把网格模型添加到场景中
scene.add(mesh)
// console.log('---mesh', mesh);

const batchGenerateBox = () => {
  // 批量创建长方体
  const num = 5000
  for (let i = 0; i < num; i++) {
    const geometry = new THREE.BoxGeometry(5, 5, 5)
    const material = new THREE.MeshLambertMaterial({
      color: 0x00ffff, // 设置材质颜色
    })
    const mesh = new THREE.Mesh(geometry, material)

    const x = (Math.random() - 0.5) * 200
    const y = (Math.random() - 0.5) * 200
    const z = (Math.random() - 0.5) * 200

    mesh.position.set(x, y, z)
    scene.add(mesh)
  }
}

// batchGenerateBox()

// 创建一个三维坐标轴, rgb 分别对应 xyz 轴
const axesHelper = new THREE.AxesHelper(100)
scene.add(axesHelper)

/**
 * 光源设置
 *
 */
// 创建一个点光源
const pointLight = new THREE.PointLight(0xffffff, 1)
// 点光源的位置
// pointLight.position.set(400,0,0) // 放在 x 轴上
// pointLight.position.set(400,200,0)
pointLight.position.set(400, 200, 300)
// 把光源添加到三维场景中
// scene.add(pointLight)

// 可视化点光源
const pointLightHelper = new THREE.PointLightHelper(pointLight, 10)
scene.add(pointLightHelper)

// 添加一个环境光
const ambient = new THREE.AmbientLight(0xffffff, 0.4)
scene.add(ambient)

// 添加一个平行光
const directionalLight = new THREE.DirectionalLight(0xffffff, 1.0)
directionalLight.position.set(50, 100, 0)
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
// const camera = new THREE.PerspectiveCamera(30, width/height, 0.1, 300) // 远裁截面没有包含 mesh 的情况
//相机在 Three.js 三维坐标系中的位置
camera.position.set(200, 200, 200)
// camera.position.set(-1000,0,0)

// get: 定义相机的视线 观察目标点的坐标, 两个坐标定义一条线, 就是视线的方向
camera.lookAt(0, 0, 0) // 坐标原点
// camera.lookAt(0,10,0) // y轴上的一点
// camera.lookAt(mesh.position) // 指向网格模型

/**
 * 创建一个 WebGL 渲染器
 */
const renderer = new THREE.WebGLRenderer()
renderer.setSize(width, height) // canvas 画布的宽高度

// 执行一个渲染操作,类比相机的拍照动作, 咔
// renderer.render(scene, camera) // 有了渲染动画就不用这一行了

// 把渲染结果 canvas 画布, 也就是所谓的"照片", 添加到网页页面上
document.body.appendChild(renderer.domElement)
// 改变 canvas 的位置
// document.getElementById("webgl").appendChild(renderer.domElement)

/**
 * 添加动画, 渲染循环
 */
const clock = new THREE.Clock() // 创建一个时钟对象
function render() {
  //requestAnimationFrame循环调用的函数中调用方法update(),来刷新时间
  stats.update()

  // const spt = clock.getDelta() * 1000
  // console.log('spt:', spt)
  // console.log('渲染帧率:', 1000/spt)

  // mesh.rotateY(0.01) // 周期性旋转, 每次旋转 0.01 弧度
  renderer.render(scene, camera) // 周期性执行相机的渲染功能,更新 canvas 画布上的内容
  requestAnimationFrame(render)
}
render()

const controls = new OrbitControls(camera, renderer.domElement)

// 有渲染循环动画执行时,不需要重新 render
// controls.addEventListener('change', function(){
//   // console.log('---camara.position', camera.position)
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
