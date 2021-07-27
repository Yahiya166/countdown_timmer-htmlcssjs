


// var hours = document.getElementById("hours");
// var min = document.getElementById("min");
// var sec = document.getElementById("sec");
// var msec = document.getElementById("msec");

// var intervel;


// function timmer() {
//     msec++;
//     msec.innerHTML = msec;
//     if (msec == 100) {
//         sec--;
//         sec.innerHTML = sec;
//         msec = 0
//         if (sec == 60) {
//             min--;
//             min.innerHTML = min;
//             sec = 0;
//         }
//     }
// }

// function start() {
//     var hours = +prompt("Enter Hours");
//     var min = +prompt("Enter minutes");
//     var sec = +prompt("Enter seconds");
//     intervel = setInterval(timmer, 10);
// }


var min;
var hours;
var interval;
var time;

var counts = document.getElementById('timmer');
var disab = document.getElementById("stop")


function start() {
    min = +prompt("Enter Minutes","12");
    time = min * 60;
    interval = setInterval(countDown, 10);
    disab.disabled = "true"
}

function reset() {
    if(disab.disabled = "true"){
        clearInterval(interval);
        disab.disabled = disab.enabled;
        min = "00";
        sec = "00";

        counts.innerHTML = `${min} : ${sec}`;

    }
}

function countDown() {
    var minutes = Math.floor(time / 60);
    var seconds = time % 60;

    seconds = seconds < min ? '0' + seconds : seconds;

    counts.innerHTML = `${minutes} : ${seconds}`;
    time--;
}

if(countDown === 0){
    reset()
}
