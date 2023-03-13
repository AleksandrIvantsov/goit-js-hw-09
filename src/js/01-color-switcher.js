const start = document.querySelector('[data-start]');
const stop = document.querySelector('[data-stop]');

start.addEventListener('click', onButtonStartClick);
stop.addEventListener('click', onButtonStopClick);

let intervalId = null;

function onButtonStartClick() {
  intervalId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);

  start.setAttribute('disabled', '');
  stop.removeAttribute('disabled');
  console.log(intervalId);
}

function onButtonStopClick() {
  clearInterval(intervalId);
  start.removeAttribute('disabled');
  stop.setAttribute('disabled', '');
  console.log(intervalId);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
