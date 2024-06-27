let startTime;
let updatedTime;
let difference;
let timerInterval;
let isRunning = false;

const timeDisplay = document.getElementById('time-display');
const startStopBtn = document.getElementById('startStopBtn');
const resetBtn = document.getElementById('resetBtn');

startStopBtn.addEventListener('click', () => {
    if (!isRunning) {
        startTime = new Date().getTime();
        timerInterval = setInterval(updateTime, 10);
        startStopBtn.textContent = 'Stop';
    } else {
        clearInterval(timerInterval);
        startStopBtn.textContent = 'Start';
    }
    isRunning = !isRunning;
});

resetBtn.addEventListener('click', () => {
    clearInterval(timerInterval);
    isRunning = false;
    startStopBtn.textContent = 'Start';
    timeDisplay.textContent = '00:00:00.00';
});

function updateTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;

    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);
    let milliseconds = Math.floor((difference % 1000) / 10);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    milliseconds = (milliseconds < 10) ? "0" + milliseconds : milliseconds;

    timeDisplay.textContent = `${hours}:${minutes}:${seconds}.${milliseconds}`;
}
