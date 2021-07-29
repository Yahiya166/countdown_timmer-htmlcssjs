var min;
var interval;
var time;

var counts = document.getElementById('timmer');
var disab = document.getElementById("stop")


function countDown() {
    var minutes = Math.floor(time / 60);
    var seconds = time % 60;
    
    seconds = seconds < min ? '0' + seconds : seconds;
    
    counts.innerHTML = `${minutes} : ${seconds}`;
    time--;
}



function start() {
    min = +prompt("Enter Minutes", "12");
    time = min * 60;
    interval = setInterval(countDown, 1000);
    disab.disabled = "true"
}

function reset() {
    if (disab.disabled = "true") {
        clearInterval(interval);
        disab.disabled = disab.enabled;
        min = "00";
        sec = "00";

        counts.innerHTML = `${min} : ${sec}`;

    }
}