
import './style.css';

import head from './header';
import aboutel from './about';
import serviceel from './service';

function component() {

  const element = document.createElement('div');
  element.innerHTML = "<h1>This is Home section</h1>";
  element.innerHTML+= `<div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero fuga laboriosam nobis, accusamus unde dolorem, magnam ex obcaecati totam praesentium dignissimos placeat, perferendis illo veritatis! Similique quae accusantium ab voluptate.</div>`;
  element.classList.add('home')


  const about = document.getElementById("ab");
  about.addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('content').innerHTML="";
    document.getElementById('content').appendChild(aboutel());
  })
  
  const ser = document.getElementById("sr");
  ser.addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('content').innerHTML="";
    document.getElementById('content').appendChild(serviceel());
  })

  const hm = document.getElementById("hm");
  hm.addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('content').innerHTML="";
    document.getElementById('content').appendChild(element);
  })
  return element;
}

const nav = document.getElementById('nav');
const display = document.getElementById('content');

nav.appendChild(head());
display.appendChild(component());