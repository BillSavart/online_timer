let hours = <HTMLInputElement>document.getElementById("hours");
let minutes = <HTMLInputElement>document.getElementById("minutes");
let seconds = <HTMLInputElement>document.getElementById("seconds");
let milli = <HTMLInputElement>document.getElementById("milli");
let btn = <HTMLInputElement>document.getElementById("toggleBtn");

let ms = 0;
let secs = 0;
let mins = 0;
let hrs = 0;
let start = false;
let timeoutID: number;

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
	if(!start){
		timeoutID = setInterval(() => {
			++ms;
			milli.innerText = (ms < 10)? "0" + ms.toString() : ms.toString();
			if(ms >= 99){
				++secs;
				ms = 0;
			}
			seconds.innerText = (secs < 10)? "0" + secs.toString() : secs.toString();
			if(secs >= 60){
				++mins;
				secs = 0;
			}
	
			minutes.innerText = (mins < 10)? "0" + mins.toString() : mins.toString();
			if(mins >= 60){
				++hrs;
				mins = 0;
			}
	
			hours.innerText = (hrs < 10)? "0" + hrs.toString() : hrs.toString();
			if(hrs > 99)
				hrs = 0;
			
			btn.innerText = "Stop";
		}, 10)
	}
	else {
		clearInterval(timeoutID);
		btn.innerText = "Start";
	}
	
	start = !start;
}