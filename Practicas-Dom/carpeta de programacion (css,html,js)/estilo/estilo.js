const boton=document.getElementById("miBoton");
const div=document.getElementById("miDiv");

boton.addEventListener("click", function(){
  const color='#'+Math.floor(Math.random()*16777215).toString(16);  
div.style.backgroundColor=color;
});