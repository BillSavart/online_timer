function startClock() {
    const date: Date = new Date();
    let hours: number = date.getHours();
    let minutes: number = date.getMinutes();
    let seconds: number = date.getSeconds();
    let time: string = "";

    time = (hours < 10)? time + "0" + hours.toString() : time + hours.toString();
    time = time + ":";
    time = (minutes < 10)? time + "0" + minutes.toString() : time + minutes.toString();
    time = time + ":";
    time = (seconds < 10)? time + "0" + seconds.toString() : time + seconds.toString();

    document.getElementById("clock")!.innerText = time;

    setTimeout(startClock, 1000);
}

startClock();

function handleClick() {
    
}