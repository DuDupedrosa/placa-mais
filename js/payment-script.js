function handleSubmitPayment(e) {
  e.preventDefault();
  const appBaseUrl = window.location.protocol + '//' + window.location.host;
  const modalLoading = document.getElementById('modalLoading');
  modalLoading.classList.add('visible');

  // pegando os valores do form
  const paymentOptionPix = document.getElementById('option-pix');
  const paymentOptionCreditCard = document.getElementById('option-credit-card');
  const paymentOptionTicket = document.getElementById('option-ticket');

  // lógica após feita a request
  setTimeout(() => {
    modalLoading.classList.remove('visible');

    if (paymentOptionPix.checked) {
      window.location.href =
        appBaseUrl + '/' + 'completar-pagamento.html?payment=pix';
    } else if (paymentOptionCreditCard.checked) {
      window.location.href =
        appBaseUrl + '/' + 'completar-pagamento.html?payment=creditCard';
    } else {
      window.location.href =
        appBaseUrl + '/' + 'completar-pagamento.html?payment=boleto';
    }
  }, [3000]);

  // controle de erro futuro
  // const modalError = document.getElementById('modalError');
  // modalError.classList.add('visible');
}

const submitPayment = document.getElementById('form-payment');
submitPayment.addEventListener('submit', handleSubmitPayment);
