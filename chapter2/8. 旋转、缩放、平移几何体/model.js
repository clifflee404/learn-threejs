import * as THREE from 'three'

// 创建一个空的几何体顶点对象

const geometry = new THREE.PlaneGeometry(100,100) // 矩形平面

console.log('---position', geometry.attributes.position);

// geometry.scale(2,2,2) // 缩放

// geometry.translate(50,0,0) // 平移

// 绕 X 轴旋转 45 度
// geometry.rotateX(Math.PI / 4);
// geometry.rotateX(-Math.PI / 4);
// 绕 Y 轴旋转 45 度
// geometry.rotateY(Math.PI / 4);

// geometry.rotateZ(Math.PI / 4);

geometry.translate(50, 0, 0);//偏移
// 居中：已经偏移的几何体居中，执行.center()，你可以看到几何体重新与坐标原点重合
geometry.center();


const material =  new THREE.MeshLambertMaterial({
  color: 0x00ffff,
  side: THREE.DoubleSide,
  // wireframe: true, // 线框材质
})

const mesh = new THREE.Mesh(geometry, material)

export default mesh