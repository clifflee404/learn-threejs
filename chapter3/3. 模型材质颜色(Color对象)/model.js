import * as THREE from 'three'

// 创建一个空的几何体顶点对象
const geometry = new THREE.BoxGeometry(50,50,50)
const material = new THREE.MeshLambertMaterial({
  // color: 0x00ffff,
  // transparent: true,
  // opacity: 0.5,
})

const mesh = new THREE.Mesh(geometry, material)

const color = new THREE.Color()
// color.r = 0
// color.b = 0
color.setRGB(0,1,0);//RGB方式设置颜色
color.setHex(0x00ff00);//十六进制方式设置颜色
color.setStyle('#00ff00');//前端CSS颜色值设置颜色

// .setHex()、.setStyle()风格的颜色值都可以作为.set()的参数
color.set(0x00ff00);//十六进制方式设置颜色
color.set('#00ff00');//前端CSS颜色值设置颜色

console.log('---color', color);
// material.color = color;
// material.color.r = 0
// material.color.b = 0

material.color.set('#00ff00');
// material.color.set('rgb(0,255,0)');

export default mesh