let hoursElement = document.getElementById('hours');
let minutesElement = document.getElementById('minutes');
let secondsElement = document.getElementById('seconds');
let timer;

window.onload = function () {
  //⚠️ para definir o tempo do cronometro é só passar os valores nas variáveis em seguida!!!!!!
  let hours = 2;
  let minutes = 0;
  let seconds = 0;

  hoursElement.textContent = formatTime(hours);
  minutesElement.textContent = formatTime(minutes);
  secondsElement.textContent = formatTime(seconds);

  startTimer(hours, minutes, seconds);
};

function startTimer(hours, minutes, seconds) {
  timer = setInterval(function () {
    // Verifica se o tempo chegou a zero
    if (hours === 0 && minutes === 0 && seconds === 0) {
      clearInterval(timer);
      timer = null;
      return;
    }

    // Decrementa o tempo
    seconds--;
    if (seconds < 0) {
      seconds = 59;
      minutes--;
      if (minutes < 0) {
        minutes = 59;
        hours--;
      }
    }

    hoursElement.textContent = formatTime(hours);
    minutesElement.textContent = formatTime(minutes);
    secondsElement.textContent = formatTime(seconds);
  }, 1000);
}

function pause() {
  clearInterval(timer);
  timer = null;
}

function reset() {
  clearInterval(timer);
  timer = null;
  hoursElement.textContent = '00';
  minutesElement.textContent = '00';
  secondsElement.textContent = '00';
}

function formatTime(time) {
  return time < 10 ? '0' + time : time;
}

// regexp para pegar o param de pagamento que é passada na url
const paymentQuery = window.location.href.split('?')[1].split('=')[1];
const paymentBoxPix = document.getElementById('complete-payment-pix');
const paymentBoxPixTime = document.getElementById('complete-payment-time-pix');
const paymentBoxTicket = document.getElementById('complete-payment-ticket');
const paymentBoxCredit = document.getElementById(
  'complete-payment-credit-card'
);

if (paymentQuery === 'boleto') {
  paymentBoxTicket.classList.add('complete-payment-visible');
  paymentBoxPix.classList.add('complete-payment-none');
  paymentBoxPixTime.classList.add('complete-payment-none');
} else if (paymentQuery === 'creditCard') {
  paymentBoxCredit.classList.add('complete-payment-visible');
  paymentBoxPix.classList.add('complete-payment-none');
  paymentBoxPixTime.classList.add('complete-payment-none');
}

if (paymentQuery === 'creditCard') {
  const submitBuyCreditCard = document.getElementById('credit-card-submit');

  function handleSubmitCreditCard(e) {
    e.preventDefault();
    const modalLoading = document.getElementById('modalLoading');
    modalLoading.classList.add('visible');

    setTimeout(() => {
      modalLoading.classList.remove('visible');
      window.location.pathname = 'sucesso-pagamento.html';
    }, [3000]);
  }

  submitBuyCreditCard.addEventListener('submit', handleSubmitCreditCard);
}
