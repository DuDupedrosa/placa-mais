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
