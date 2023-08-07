import * as THREE from "three"

// 创建一个空的几何体顶点对象
const geometry = new THREE.BoxGeometry(20, 20, 20)
const material = new THREE.MeshLambertMaterial({
  color: 0x00ffff,
  // transparent: true,
  // opacity: 0.5,
})

// const group = new THREE.Group()
// group.name = '小区房子'

// const mesh = new THREE.Mesh(geometry, material)
// mesh.name = '一号楼'
// group.add(mesh)

// 批量创建多个长方体表示高层楼
const group1 = new THREE.Group(); //所有高层楼的父对象
group1.name = "高层";
for (let i = 0; i < 5; i++) {
    const geometry = new THREE.BoxGeometry(20, 60, 10);
    const material = new THREE.MeshLambertMaterial({
        color: 0x00ffff
    });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.x = i * 30; // 网格模型mesh沿着x轴方向阵列
    group1.add(mesh); //添加到组对象group1
    mesh.name = i + 1 + '号楼';
    // console.log('mesh.name',mesh.name);
}
group1.position.y = 30;


const group2 = new THREE.Group();
group2.name = "洋房";
// 批量创建多个长方体表示洋房
for (let i = 0; i < 5; i++) {
    const geometry = new THREE.BoxGeometry(20, 30, 10);
    const material = new THREE.MeshLambertMaterial({
        color: 0x00ffff
    });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.x = i * 30;
    group2.add(mesh); //添加到组对象group2
    mesh.name = i + 6 + '号楼';
}
group2.position.z = 50;
group2.position.y = 15;

const model = new THREE.Group();
model.name='小区房子';
model.add(group1, group2);
model.position.set(-50,0,-25);

// 递归遍历所有模型节点
model.traverse(function(obj){
  // 打印 group 和 mesh
  // console.log('---obj.name', obj.name);
  if(obj.isMesh){
    // 仅打印 mesh
    // console.log('---obj.name', obj.name);

    // 批量改变 mesh 颜色
    // obj.material.color.set(0xcccccc)
  }
})

//查找某个具体的模型.getObjectByName()
const obj = model.getObjectByName('4号楼')
obj.material.color.set(0xff0000)


export default model
