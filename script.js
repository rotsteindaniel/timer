let seconds = 0;
let minutes = 0;
let hours = 0;
let interval

let isRunning = false;

function twoDigits(digit) {
    if (digit<10){
        return ("0"+digit)
    }else {
        return digit
    }
}

function start(){
    if (!isRunning) {
        interval = setInterval (timer, 1000);
    }
    isRunning = true;
}

function pause(){
    clearInterval(interval)
    isRunning = false;
}

function stop(){
    clearInterval(interval)
    seconds=0
    minutes=0
    document.getElementById('watch').innerText="00:00:00"
    isRunning = false;
}

function timer(){
    seconds++
    if(seconds==60){
        minutes++
        seconds=0
        if(minutes==60){
            minutes=0
            hours++
        }
    }
    document.getElementById('watch').innerText=twoDigits(hours)+":"+twoDigits(minutes)+":"+twoDigits(seconds)
}