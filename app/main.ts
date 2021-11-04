function startClock():void {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let time = "";

    time = (hours < 10)? time + "0" + hours.toString() : time + hours.toString();
    time = time + ":";
    time = (minutes < 10)? time + "0" + minutes.toString() : time + minutes.toString();
    time = time + ":";
    time = (seconds < 10)? time + "0" + seconds.toString() : time + seconds.toString();

    document.getElementById("clock")!.innerText = time;

    setTimeout(startClock, 1000);
}

startClock();