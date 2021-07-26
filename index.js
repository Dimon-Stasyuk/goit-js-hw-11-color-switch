const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
    startBtn: document.querySelector('[data-action="start"]'),
    stopBtn: document.querySelector('[data-action="stop"]'),
}
const { startBtn, stopBtn } = refs;
let isActive = false;
let timerId = null;

startBtn.addEventListener('click', onStartBtn);
stopBtn.addEventListener('click', onStopBtn);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};


function onStartBtn() {
    if (isActive === false) {        
        colorChoice();
    }    
}

function onStopBtn() {
    clearInterval(timerId);
    isActive = false;
}

function colorChoice() {
    timerId = setInterval(() => {
        isActive = true;
        document.body.style.backgroundColor = colors[randomIntegerFromInterval(0, 5)];
        }, 1000);
}