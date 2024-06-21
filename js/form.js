const btnEnviar = document.getElementById('button');


const validate = (e) => {
    e.preventDefault();
  const nombreDeUsuario = document.getElementById('name');
  const direcciónEmail = document.getElementById('email');
  const telefono = document.getElementById('telephone');
  let isValid = true;
  
  if (nombreDeUsuario.value.trim() === "") { 
    showError(nombreDeUsuario, "Por favor, escribe tu nombre.");
    isValid = false;
  } else {
    showSuccess(nombreDeUsuario);
  }

  if (direcciónEmail.value.trim() === "") { 
    showError(direcciónEmail, "Por favor, escribe tu correo electrónico.");
    isValid = false;
  } else {
    if (!checkEmail(direcciónEmail)) {
      isValid = false;
    }
  }
  

  if (telefono.value.trim() === "") { 
    showError(telefono, "Por favor, escribe tu número de teléfono.");
    isValid = false;
  } else {
    showSuccess(telefono);
  }


  return isValid;
}

function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.textContent = message;
    small.classList.remove('small-hidden'); 
}

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
    const small = formControl.querySelector('small');
    small.textContent = ''; 
    small.classList.add('small-hidden');
}

function checkEmail(input) {
    const email = input.value.trim();
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (re.test(email)) {
        showSuccess(input);
        return true;
    } else {
        showError(input, 'Por favor, introduce un correo electrónico válido');
        return false;
    }
}


const openModal = document.querySelector('.btn-modal');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.modal__close');

btnEnviar.addEventListener('click', (e) => {
  if(validate(e)) {
    modal.style.display = "flex";
    modal.click(); 
  }
});

modal.addEventListener('click', (e) => {
  e.preventDefault();
  modal.classList.add('modal--show');
});

modal.removeEventListener('click', (e) => {
  e.preventDefault();
  modal.classList.remove('modal--show');
});

closeModal.addEventListener('click', function() {
  modal.style.display = "none";
})



let form = document.getElementById("form");

form.addEventListener(
  "blur",
  function (event) {
    event.target.style.background = "";
  },
  true,
);