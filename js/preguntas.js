
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
