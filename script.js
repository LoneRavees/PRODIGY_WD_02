let display = document.getElementById("display");
let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");
let resetBtn = document.getElementById("reset");

let seconds = 0;
let minutes = 0;
let hours = 0;
let timer = null;

function updateDisplay() {
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    display.innerHTML = `${h} : ${m} : ${s}`;
}

function stopwatch() {
    seconds++;

    if (seconds == 60) {
        seconds = 0;
        minutes++;
    }

    if (minutes == 60) {
        minutes = 0;
        hours++;
    }

    updateDisplay();
}

startBtn.onclick = function () {
    if (timer !== null) {
        clearInterval(timer);
    }
    timer = setInterval(stopwatch, 1000);
};

stopBtn.onclick = function () {
    clearInterval(timer);
};

resetBtn.onclick = function () {
    clearInterval(timer);

    seconds = 0;
    minutes = 0;
    hours = 0;

    updateDisplay();
};

updateDisplay();