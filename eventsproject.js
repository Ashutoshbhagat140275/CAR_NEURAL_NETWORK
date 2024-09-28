let var1=document.querySelector(".dot3");
let var2=document.querySelector(".flex2");
let var3=document.querySelector(".inner-items");
let var4=document.querySelector(".btn1");
let var5=document.querySelector(".btn2");

var1.addEventListener("click",()=>{
      var2.setAttribute("class","grid-items2");
      var3.setAttribute("class","inner-items1")
})

var1.addEventListener("dblclick",()=>{
    var2.setAttribute("class","flex2");
    var3.setAttribute("class","inner-items")
})
