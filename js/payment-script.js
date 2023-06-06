function handleSubmitPayment(e) {
  console.log('%c⧭', 'color: #ffa640', ' chamei');
  e.preventDefault();

  const modalLoading = document.getElementById('modalLoading');
  modalLoading.classList.add('visible');

  setTimeout(() => {
    modalLoading.classList.remove('visible');
    window.location.pathname = 'completar-pagamento.html';
  }, [3000]);
  // controle de erro futuro
  // const modalError = document.getElementById('modalError');
  // modalError.classList.add('visible');
}

const submitPayment = document.getElementById('form-payment');
submitPayment.addEventListener('submit', handleSubmitPayment);
