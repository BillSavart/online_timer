"use strict";
var hours = document.getElementById("hours");
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");
var milli = document.getElementById("milli");
var btn = document.getElementById("toggleBtn");
var ms = 0;
var secs = 0;
var mins = 0;
var hrs = 0;
var start = false;
var timeoutID;
hours.innerText = "00";
minutes.innerText = "00";
seconds.innerText = "00";
milli.innerText = "00";
function setTimer() {
    clearTimeout(timeoutID);
    start = false;
    ms = 0;
    secs = 0;
    mins = 0;
    hrs = 0;
    hours.innerText = "00";
    minutes.innerText = "00";
    seconds.innerText = "00";
    milli.innerText = "00";
    btn.innerText = "Start";
}
function toggleTimer() {
    if (!start) {
        timeoutID = setInterval(function () {
            ++ms;
            milli.innerText = (ms < 10) ? "0" + ms.toString() : ms.toString();
            if (ms >= 99) {
                ++secs;
                ms = 0;
            }
            seconds.innerText = (secs < 10) ? "0" + secs.toString() : secs.toString();
            if (secs >= 60) {
                ++mins;
                secs = 0;
            }
            minutes.innerText = (mins < 10) ? "0" + mins.toString() : mins.toString();
            if (mins >= 60) {
                ++hrs;
                mins = 0;
            }
            hours.innerText = (hrs < 10) ? "0" + hrs.toString() : hrs.toString();
            if (hrs > 99)
                hrs = 0;
            btn.innerText = "Stop";
        }, 10);
    }
    else {
        clearInterval(timeoutID);
        btn.innerText = "Start";
    }
    start = !start;
}
