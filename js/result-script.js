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

  setTimeout(() => {
    modalLoading.classList.remove('visible');
    window.location.pathname = 'pagamento.html';
  }, [3000]);
}

const buttonSubmit = document.getElementById('open-more-information-submit');
buttonSubmit.addEventListener('click', handleSearchMoreInformation);
