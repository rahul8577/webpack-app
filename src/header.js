// function header(){
//     const head = document.createElement("div");
//     const nhead = document.createElement("div");
//     head.innerHTML ="<h1>This is heade</h1>" 
//     return head;
// }

// module.exports=header;

// import _ from 'lodash';

// console.log(_.join(['Another', 'module', 'loaded!'], ' '));


export default function header() {

    const headings = document.createElement("div");
    headings.innerHTML = `<div id='hm'><a href="">Home</a></div><div id='ab'><a href="">About</a></div><div id='sr'><a href="">Service</a></div>`
    headings.classList.add("head")
    return headings;

}