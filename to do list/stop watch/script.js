let timer;
let isRunning = false;
let elapsedTime = 0;

const display = document.getElementById('display');
const startStopBtn = document.getElementById('startStopBtn');
const resetBtn = document.getElementById('resetBtn');

startStopBtn.addEventListener('click', () => {
    if (isRunning) {
        stopTimer();
    } else {
        startTimer();
    }
});

resetBtn.addEventListener('click', resetTimer);

function startTimer() {
    isRunning = true;
    startStopBtn.textContent = 'Stop';
    timer = setInterval(() => {
        elapsedTime++;
        updateDisplay();
    }, 1000);
}

function stopTimer() {
    isRunning = false;
    startStopBtn.textContent = 'Start';
    clearInterval(timer);
}

function resetTimer() {
    stopTimer();
    elapsedTime = 0;
    updateDisplay();
}

function updateDisplay() {
    let hours = Math.floor(elapsedTime / 3600);
    let minutes = Math.floor((elapsedTime % 3600) / 60);
    let seconds = elapsedTime % 60;

    hours = String(hours).padStart(2, '0');
    minutes = String(minutes).padStart(2, '0');
    seconds = String(seconds).padStart(2, '0');

    display.textContent = `${hours}:${minutes}:${seconds}`;
}
