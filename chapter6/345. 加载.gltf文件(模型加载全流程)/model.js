import * as THREE from "three"
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const loader = new GLTFLoader()

const model = new THREE.Group()

// const url = '../../gltf/工厂.gltf'
const url = '../../gltf/工厂.glb'
// const url = '../../gltf/工厂/工厂.gltf'
// const url = '../../gltf/金属.glb'
// const url = '../../gltf/轿车.glb'
// const url = '../../gltf/车pbr.glb'

loader.load(url , function(gltf){
  console.log('控制台查看加载gltf文件返回的对象结构',gltf);
  console.log('gltf对象场景属性',gltf.scene);
  // 返回的场景对象gltf.scene插入到threejs场景中
  model.add( gltf.scene );
})

export default model
