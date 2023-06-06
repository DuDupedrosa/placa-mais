function scrollToSection(id) {
  const section = document.getElementById(id);

  // if (!section) {
  //   window.location.pathname('/');
  // }

  section.scrollIntoView({
    block: 'center',
    behavior: 'smooth',
  });
}

function handleSubmit(e) {
  e.preventDefault();

  const modalLoading = document.getElementById('modalLoading');
  modalLoading.classList.add('visible');

  setTimeout(() => {
    modalLoading.classList.remove('visible');
    window.location.pathname = 'resultado.html';
  }, [3000]);
}

// submit para buscar uma placa
const btn = document.querySelectorAll('.submit');

btn.forEach((button) => {
  button.addEventListener('click', handleSubmit);
});

function handleSubmitContact(e) {
  e.preventDefault();

  const modalSuccess = document.getElementById('modalSuccess');
  modalSuccess.classList.add('visible');
  // controle de erro futuro
  // const modalError = document.getElementById('modalError');
  // modalError.classList.add('visible');
}

const submitContact = document.getElementById('form-contact');
submitContact.addEventListener('submit', handleSubmitContact);

function handleCloseModalSuccess() {
  const modalSuccess = document.getElementById('modalSuccess');
  modalSuccess.classList.remove('visible');
}

const buttonCloseModalSuccess = document.querySelectorAll(
  '.close-modal-success'
);
buttonCloseModalSuccess.forEach((button) => {
  button.addEventListener('click', handleCloseModalSuccess);
});

function handleCloseModalError() {
  const modalError = document.getElementById('modalError');
  modalError.classList.remove('visible');
}

const buttonCloseModalError = document.querySelectorAll('.close-modal-error');
buttonCloseModalError.forEach((button) => {
  button.addEventListener('click', handleCloseModalError);
});
