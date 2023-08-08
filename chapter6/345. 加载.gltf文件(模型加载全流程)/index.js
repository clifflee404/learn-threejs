import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import model from './model.js'

/**
 * 创建一个三维场景
 */
const scene = new  THREE.Scene()
scene.add(model)

// 辅助观察坐标系
const axesHelper = new THREE.AxesHelper(100)
scene.add(axesHelper)

const gridHelper = new THREE.GridHelper(600,50,0x009999, 0x004444)
// gridHelper.position.y = -1
scene.add(gridHelper)

// 添加一个平行光与环境光
const directionalLight = new THREE.DirectionalLight(0xffffff, 1.0)
directionalLight.position.set(500,600,700)
// scene.add(directionalLight)
const ambient = new THREE.AmbientLight(0xffffff, 0.9)
scene.add(ambient)
// 可视化平行光
// const dirLightHelper = new THREE.DirectionalLightHelper(directionalLight, 15, 0xffff00)
// scene.add(dirLightHelper)

// 渲染器和相机
const width = window.innerWidth
const height = window.innerHeight
const camera = new THREE.PerspectiveCamera(30, width/height, 0.1, 3000)

// camera.position.set(200,200,200)
camera.position.set(248,226,82)
// camera.lookAt(0,0,0)
// camera.lookAt(100,0,0)
camera.lookAt(-14,-2,35)

const renderer = new THREE.WebGLRenderer({
  antialias: true, 
})
renderer.setSize(width, height) // canvas 画布的宽高度
renderer.setPixelRatio(window.devicePixelRatio)
document.body.appendChild(renderer.domElement)


const controls = new OrbitControls(camera, renderer.domElement)
// controls.target.set(100, 0, 0);
// controls.update();//update()函数内会执行camera.lookAt(controls.targe)

controls.target.set(-14,-2,35)
controls.update()

//解决加载gltf格式模型纹理贴图和原图不一样问题
// renderer.outputEncoding = THREE.sRGBEncoding;

//新版本，加载gltf，不需要执行下面代码解决颜色偏差
// renderer.outputColorSpace = THREE.SRGBColorSpace;//设置为SRGB颜色空间

function render() {
  renderer.render(scene, camera)
  requestAnimationFrame(render)

  // 浏览器控制台查看相机位置变化
  // console.log('camera.position',camera.position);

  // 浏览器控制台查看controls.target变化，辅助设置lookAt参数
  // console.log('controls.target',controls.target);
}
render()

window.onresize = function () {
  renderer.setSize(window.innerWidth, window.innerHeight)
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
}

console.log('---scene.children', scene.children);