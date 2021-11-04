function setTimer():void {
    let time = "00:00:00.00";
    document.getElementById("timer")!.innerText = time;
    
    let btn = document.getElementById("start");
    if(!btn!.classList.contains("start"))
        btn!.classList.toggle("start");
        
    btn!.innerText = "Start";
}

setTimer();

function startTimer():void {
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    let milliseconds = 0;
    let time = "";

    let btn = document.getElementById("start");
    btn!.classList.toggle("start");
    if(btn!.classList.contains("start")){
        btn!.innerText = "Start";
    }
    else{
        btn!.innerText = "Stop";
    }
}