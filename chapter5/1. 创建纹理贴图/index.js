import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import model from './model.js'

/**
 * 创建一个三维场景
 */
const scene = new  THREE.Scene()
scene.add(model)

// 辅助观察坐标系
// const axesHelper = new THREE.AxesHelper(100)
// scene.add(axesHelper)


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
camera.position.set(0,0,600)
camera.lookAt(0,0,0)

const renderer = new THREE.WebGLRenderer({
  antialias: true, 
})
renderer.setSize(width, height) // canvas 画布的宽高度
renderer.setPixelRatio(window.devicePixelRatio)
document.body.appendChild(renderer.domElement)


const controls = new OrbitControls(camera, renderer.domElement)

function render() {
  // model.rotateY(0.01);//旋转动画
  renderer.render(scene, camera)
  requestAnimationFrame(render)
}
render()

window.onresize = function () {
  renderer.setSize(window.innerWidth, window.innerHeight)
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
}

console.log('---scene.children', scene.children);