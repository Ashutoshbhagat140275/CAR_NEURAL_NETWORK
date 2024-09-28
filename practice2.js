let tagname=document.querySelector("body");
let newel=document.createElement("button");
newel.innerText="Click ME!";

tagname.prepend(newel);

let access=document.querySelector("p");
console.log(access);
// access.style.backgroundColor="white";
// access.style.color="black";