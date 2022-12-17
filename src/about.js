export default function about() {
    const about = document.createElement("div");
    about.innerHTML = `<h1>About Me</h1>`;
    about.innerHTML += `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero fuga laboriosam nobis, accusamus unde dolorem, magnam ex obcaecati totam praesentium dignissimos placeat, perferendis illo veritatis! Similique quae accusantium ab voluptate.`;
    about.classList.add('about');
    return about;

}