let div=document.querySelector("div");
let select=document.querySelector("select")
function Changer(Color){
localStorage.setItem("color",Color)
div.style.color=localStorage.getItem("color")
}
if(localStorage.getItem!==null)
    div.style.color=localStorage.getItem("color")
    select.value=localStorage.getItem("color")