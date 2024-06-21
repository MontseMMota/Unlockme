///////////////CÓDIGO TÍTULO/////////////////////
window.onload = function() {
  if (window.innerWidth > 998) {
      let title = document.querySelector('.title-transition');
      title.classList.remove("text-2xl"); 
      title.classList.add("text-9xl"); 
  }
};


///////////////CÓDIGO CAROUSEL/////////////////////

let defaultTransform = 0;
const cardWidth = 398; // Ancho de cada tarjeta en el carrusel

function goNext() {
  const slider = document.getElementById("slider");
  const numCards = slider.children.length;
  
  defaultTransform -= cardWidth;
  

  if (defaultTransform <= -(numCards - 1) * cardWidth) {
    defaultTransform = 0;
  }
  
  slider.style.transform = "translateX(" + defaultTransform + "px)";
}

function goPrev() {
  const slider = document.getElementById("slider");
  const numCards = slider.children.length;

  defaultTransform += cardWidth;


  if (defaultTransform > 0) {
    defaultTransform = -(numCards - 1) * cardWidth;
  }

  slider.style.transform = "translateX(" + defaultTransform + "px)";
}

document.getElementById("next").addEventListener("click", goNext);
document.getElementById("prev").addEventListener("click", goPrev);



///////////////PREGUNTAS FRECUENTES/////////////////////



const botones = document.querySelectorAll('.pregunta-frecuente button');
let preguntaActual = null;
let respuestaActual = null;

botones.forEach(boton => {
    boton.addEventListener('click', function() {
        const pregunta = this.closest('.pregunta-frecuente');
        const respuesta = pregunta.nextElementSibling;
        
        // Si hay una pregunta y respuesta mostrada, ocúltala
        if (preguntaActual && respuestaActual) {
            respuestaActual.classList.add('oculto');
        }
        
        // Si la pregunta actual es la misma que la que se hizo clic,
        // significa que queremos ocultarla
        if (preguntaActual === pregunta) {
            preguntaActual = null;
            respuestaActual = null;
        } else {
            // Si no, muestra la nueva pregunta y respuesta
            respuesta.classList.remove('oculto');
            preguntaActual = pregunta;
            respuestaActual = respuesta;
        }
    });
});







