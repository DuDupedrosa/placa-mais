function handleSectionShowInformation() {
  const section = document.getElementById('show-more-information-section');

  section.scrollIntoView({
    block: 'center',
    behavior: 'smooth',
  });
}

const buttonGoSectionOpenInformation = document.querySelectorAll(
  '.call-action-show-informations'
);
buttonGoSectionOpenInformation.forEach((button) => {
  button.addEventListener('click', handleSectionShowInformation);
});

function handleSearchMoreInformation() {
  const modalLoading = document.getElementById('modalLoading');
  modalLoading.classList.add('visible');
  const buttonsNone = document.querySelectorAll('body');
  buttonsNone.forEach((body) => {
    body.classList.add('events-none');
  });

  setTimeout(() => {
    modalLoading.classList.remove('visible');
    buttonsNone.forEach((body) => {
      body.classList.remove('events-none');
    });
    window.location.pathname = 'pagamento.html';
  }, [3000]);
}

const buttonSubmit = document.getElementById('open-more-information-submit');
buttonSubmit.addEventListener('click', handleSearchMoreInformation);

const returnHomeButton = document.getElementById('return-home');
returnHomeButton.addEventListener('click', () => {
  window.location.pathname = '/';
});
