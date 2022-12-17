export default function service(){
    const service =document.createElement('div');
    service.innerHTML=`<h1>Services</h1>`;
    service.innerHTML+=`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero fuga laboriosam nobis, accusamus unde dolorem, magnam ex obcaecati totam praesentium dignissimos placeat, perferendis illo veritatis! Similique quae accusantium ab voluptate.`;
    service.classList.add('service');
    return service;
}