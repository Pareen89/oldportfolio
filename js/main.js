/////////////////////////////////////////////
///////////////Variables////////////////////
///////////////////////////////////////////
let element = document.documentElement;
let full = document.getElementById("full");
let arrow = document.getElementById("arrow");
let compress = document.getElementById("compress");
let icon = document.getElementById("icon");
let notification = document.getElementById("notification");
let about = document.getElementById("about");
let startMenu = document.getElementById("startMenu");
let windows = document.getElementById("windows");
let aboutme = document.getElementById("aboutme");
let resumeFile = document.getElementById("resumeFile");
let projectsFolder = document.getElementById("projectsFolder");
let closeProjectFolder = document.getElementById("closeProjectFolder");
let place = document.getElementById("place");
let projects = document.getElementById("projects");
let clickedFile = document.getElementById("clickedFile");
let clickedFolder = document.getElementById("clickedFolder");
let minProjectFolder = document.getElementById("minProjectFolder");
let mobileProjects = document.getElementById('mobileProjects');
/////////////////////////////////////////////
//////////////////Start Menu ///////////////
///////////////////////////////////////////
windows.addEventListener("click", function () {
  if (startMenu.classList.contains('startMenu-toggle')) {
    startMenu.classList.remove('startMenu-toggle');
  } else {
    startMenu.classList.add('startMenu-toggle');
  }
});


/////////////////////////////////////////////
//////////////Notification Click ///////////
///////////////////////////////////////////
icon.addEventListener("click", function () {
  notification.innerHTML = "";
  aboutme.classList.toggle("aboutme-toggle");
});
about.addEventListener("click", function () {
  notification.innerHTML = "";
  aboutme.classList.toggle("aboutme-toggle");
});

/////////////////////////////////////////////
//////full screen and exit full screen//////
///////////////////////////////////////////
full.addEventListener("click", fullScreen);
// to make website fullscreen
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
// to exit fullscreen
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
  // time and date format(time= hh:mm and date = mm/dd/yyyy )
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
  // assigning time and date to website
  document.getElementById("time").innerHTML = time;
  document.getElementById("date").innerHTML = date;
  document.getElementById("time1").innerHTML = time;
  document.getElementById("date1").innerHTML = date;
}
var update = setInterval(timeAndDate, 1000);
/////////////////////////////////////////////
////////////////Folder Click////////////////
///////////////////////////////////////////
resumeFile.addEventListener("click", function () {
  resumeFile.style.backgroundColor = "rgba(255, 255, 255, 0.6)";
});
projectsFolder.addEventListener("click", function () {
  projectsFolder.style.backgroundColor = "rgba(255, 255, 255, 0.6)";
});
window.addEventListener("mouseup", function (event) {
  if (event.target !== resumeFile) {
    resumeFile.style.backgroundColor = "transparent";
  }
});
window.addEventListener("mouseup", function (event) {
  if (event.target !== projectsFolder) {
    projectsFolder.style.backgroundColor = "transparent";
  }
});

/////////////////////////////////////////////
/////////////Folder Functions///////////////
///////////////////////////////////////////

// Project Folder (desktop version)
projectsFolder.addEventListener("dblclick", function () {
  projects.style.display = "inherit";
  clickedFolder.style.display = "inherit";
  clickedFolder.style.background = "rgb(80, 80, 80)";
});

closeProjectFolder.addEventListener("click", function () {
  projects.style.display = "none";
  clickedFolder.style.display = "none";
});
minProjectFolder.addEventListener("click", function () {
  projects.style.display = "none";
  clickedFolder.style.backgroundColor = "transparent";
});
clickedFolder.addEventListener("click", function () {
  if (projects.style.display == "none") {
    projects.style.display = "inherit";
    clickedFolder.style.backgroundColor = "rgb(80, 80, 80)";
  } else {
    projects.style.display = "none";
    clickedFolder.style.backgroundColor = "transparent";
  }
});
// Projects Folder (mobile)
mobileProjects.addEventListener("click", function () {
  if (projects.style.display == "none") {
    projects.style.display = "inherit";
  } else {
    projects.style.display = "none";
  }
});

// resume file (desktop version)
resumeFile.addEventListener('dblclick', loadResume);
clickedFile.addEventListener('click', function () {
  resume.style.display = "inherit";
  clickedFile.style.backgroundColor = "inherit";
  loadResume2();
})
/////////////////////////////////////////////
///////////////////Ajax/////////////////////
///////////////////////////////////////////
// Ajax calls for resume file
function loadResume() {

  clickedFile.style.display = "inherit";
  clickedFile.style.background = "rgb(80, 80, 80)";
  var xhr = new XMLHttpRequest();
  xhr.open('GET', '../html/resume.html', true);
  xhr.onload = function () {
    if (this.status == 200) {
      document.getElementById('resume').innerHTML = this.responseText;
      var head = document.getElementsByTagName('head')[0];
      script = document.createElement('script');
      script.src = "js/resume.js";
      head.appendChild(script);

    } else {
      document.getElementById('resume').innerHTML = 'Not Found'
    }
  }
  xhr.send();
}