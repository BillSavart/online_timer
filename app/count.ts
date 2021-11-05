let hrsCount = (<HTMLInputElement>document.getElementById("hrscount"));
let minsCount = (<HTMLInputElement>document.getElementById("minscount"));
let secsCount = (<HTMLInputElement>document.getElementById("secscount"));

let btnCount = document.getElementById("toggleBtn")!;

let startCount = false;
let timeoutIDCount: number;

function setCounter() {
	clearTimeout(timeoutIDCount);
	startCount = false;
	hrsCount.value = "00";
	minsCount.value = "00";
	secsCount.value = "00";
	btnCount.innerText = "Start";
}

function prepend(clockNum: string) {
	clockNum = "0" + clockNum;
	return clockNum;
}

function toggleCounter() {
	if(!startCount){
		btnCount.innerText = "Pause";
		if(hrsCount.valueAsNumber > 99) {
			hrsCount.valueAsNumber = 99;
		}
		if(minsCount.valueAsNumber > 59) {
			minsCount.valueAsNumber = 59;
		}
		if(secsCount.valueAsNumber > 59) {
			secsCount.valueAsNumber = 59;
		}
		
		timeoutIDCount = setInterval(() => {
			if(hrsCount.valueAsNumber == 0 && minsCount.valueAsNumber == 0 && secsCount.valueAsNumber == 0) {
        		setCounter();
				alert("Time's up!");
    		}
			else if(secsCount.valueAsNumber != 0) {
        		secsCount.valueAsNumber--;
    		}
			else if(minsCount.valueAsNumber != 0 && secsCount.valueAsNumber == 0) {
        		secsCount.valueAsNumber = 59;
        		minsCount.valueAsNumber--;
    		} else if(hrsCount.valueAsNumber != 0 && minsCount.valueAsNumber == 0) {
				secsCount.valueAsNumber = 59;
        		minsCount.valueAsNumber = 59;
        		hrsCount.valueAsNumber--;
    		}

			//prepend 0 when under 10
			if(hrsCount.value.length == 1) {
				hrsCount.value = prepend(hrsCount.value);
			}
			if(minsCount.value.length == 1) {
				minsCount.value = prepend(minsCount.value);
			}
			if(secsCount.value.length == 1) {
				secsCount.value = prepend(secsCount.value);
			}

		}, 1000)
	}
	else {
		clearInterval(timeoutIDCount);
		btnCount.innerText = "Start";
	}
	
	startCount = !startCount;
}