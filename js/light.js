//////////////////LUZ EN PUNTERO//////////////////////
let shadow = document.querySelector("#shadow");

const mouse_shadow = function(event) {
  shadow.style.top = event.pageY + 'px';
  shadow.style.left = event.pageX + 'px';
}

document.querySelector("body").onload = function() {
  this.addEventListener("mousemove", mouse_shadow)
}









