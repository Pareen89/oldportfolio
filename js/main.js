/////////////////////////////////////////////
///////////////Variables////////////////////
///////////////////////////////////////////
let element = document.documentElement;
let full = document.getElementById('full');
let arrow = document.getElementById('arrow');
let compress = document.getElementById('compress');
let icon = document.getElementById('icon');
let notification = document.getElementById('notification');
let about = document.getElementById('about');

/////////////////////////////////////////////
//////////////Notification Click ///////////
///////////////////////////////////////////
icon.addEventListener('click', function () {
    notification.innerHTML = '';
})
about.addEventListener("click", function () {
    notification.innerHTML = '';
})
/////////////////////////////////////////////
//////full screen and exit full screen//////
///////////////////////////////////////////
full.addEventListener('click', fullScreen);

function fullScreen() {
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
        /* Firefox */
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
        /* Chrome, Safari & Opera */
        element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
        /* IE/Edge */
        element.msRequestFullscreen();
    }
}

function closeScreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }
}

/////////////////////////////////////////////
////////////////Date and Time///////////////
///////////////////////////////////////////
function timeAndDate() {
    let now = new Date();
    let hour = now.getHours();
    let min = now.getMinutes();
    let month = now.getMonth() + 1;
    let day = now.getDate();
    let year = now.getFullYear();
    if (min < 10) {
        min = `0${min}`;
    }
    if (hour > 12) {
        time = `${hour - 12}:${min} PM`;
    } else if (hour === 0) {
        hour = 12;
        time = `${hour}:${min} AM`;
    } else {
        time = `${hour}:${min} AM`;
    }

    let date = `${month}/${day}/${year}`;
    document.getElementById("time").innerHTML = time;
    document.getElementById("date").innerHTML = date;
    document.getElementById("time1").innerHTML = time;
    document.getElementById("date1").innerHTML = date;
}
var update = setInterval(timeAndDate, 1000);