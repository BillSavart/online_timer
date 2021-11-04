"use strict";
function setTimer() {
    var time = "00:00:00.00";
    document.getElementById("timer").innerText = time;
    var btn = document.getElementById("start");
    if (!btn.classList.contains("start"))
        btn.classList.toggle("start");
    btn.innerText = "Start";
}
setTimer();
function startTimer() {
    var hours = 0;
    var minutes = 0;
    var seconds = 0;
    var milliseconds = 0;
    var time = "";
    var btn = document.getElementById("start");
    btn.classList.toggle("start");
    if (btn.classList.contains("start")) {
        btn.innerText = "Start";
    }
    else {
        btn.innerText = "Stop";
    }
}
