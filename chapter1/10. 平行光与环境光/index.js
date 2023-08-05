import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

/**
 * 4. 第一个3D案例—创建3D场景
 * 5. 第一个3D案例—透视投影相机
 * 6. 第一个3D案例—渲染器
 */

/**
 * 创建一个三维场景
 */
const scene = new  THREE.Scene()

/**
 * 创建网格模型
 */
// 给三维场景添加物体,定义一个长方体
const geometry = new THREE.BoxGeometry(100,100,100)

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
pointLight.position.set(400,200,300) 
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
directionalLight.position.set(50,100,0)
// directionalLight.position.set(100,100,100) // 在立方体对角线上,三个面一样,看不清楚棱边
// directionalLight.target = mesh // 默认坐标原点
scene.add(directionalLight)

// 可视化平行光
const dirLightHelper = new THREE.DirectionalLightHelper(directionalLight, 15, 0xffff00)
scene.add(dirLightHelper)


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


const controls = new OrbitControls(camera, renderer.domElement)

controls.addEventListener('change', function(){
  console.log('---camara.position', camera.position)
  renderer.render(scene, camera)
})