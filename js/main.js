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
let mobileProjects = document.getElementById("mobileProjects");
let parkingListIcon = document.getElementById("parkingList__icon");
let parkingList = document.getElementById("parkingList");
let resume = document.getElementById("resume");
let minResumeFile = document.getElementById('minResumeFile');
let closeResumeFile = document.getElementById('closeResumeFile');
/////////////////////////////////////////////
//////////////////Start Menu ///////////////
///////////////////////////////////////////
windows.addEventListener("click", function () {
  if (startMenu.classList.contains("startMenu-toggle")) {
    startMenu.classList.remove("startMenu-toggle");
  } else {
    startMenu.classList.add("startMenu-toggle");
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
/////////////Folder Functions///////////////
///////////////////////////////////////////
// Opening a program
function open(x, y, z) {
  // single click to highlight the desktop folders/file
  x.addEventListener("click", function () {
    x.style.backgroundColor = "rgba(255, 255, 255, 0.6)";
  });
  // remove highlight when clicked anywhere ouside of Folder/File
  window.addEventListener("mouseup", function (event) {
    if (event.target !== x) {
      x.style.backgroundColor = "transparent";
    }
  });
  // double click to open desktop folders/file
  x.addEventListener("dblclick", function () {
    y.style.display = "inherit";
    z.style.display = "inherit";
    z.style.background = "rgb(80, 80, 80)";
  });
}
open(projectsFolder, projects, clickedFolder); // Project Folder
open(resumeFile, resume, clickedFile); // Resume File

// Closing a program
function close(x, y, z) {
  x.addEventListener("click", function () {
    y.style.display = "none";
    z.style.display = "none";
  });
}
close(closeProjectFolder, projects, clickedFolder); // Project Folder
close(closeResumeFile, resume, clickedFile); // Resume File

// Min the folder/file
function min(x, y, z) {
  x.addEventListener("click", function () {
    y.style.display = "none";
    z.style.backgroundColor = "transparent";
  });
}
min(minProjectFolder, projects, clickedFolder); // Project Folder
min(minResumeFile, resume, clickedFile); // resume file

// closing and opening programs from Taskbar Icons
function taskbarIcons(x, y) {
  x.addEventListener("click", function () {
    if (y.style.display == "none") {
      y.style.display = "inherit";
      x.style.backgroundColor = "rgb(80, 80, 80)";
    } else {
      y.style.display = "none";
      x.style.backgroundColor = "transparent";
    }
  });
}
taskbarIcons(clickedFolder, projects); // Project Folder
taskbarIcons(clickedFile, resume); // Resume FIle

// Projects Folder (mobile)
mobileProjects.addEventListener("click", function () {
  if (projects.style.display == "none") {
    projects.style.display = "inherit";
  } else {
    projects.style.display = "none";
  }
});
mobileResume.addEventListener("click", function () {
  if (resume.style.display == "none") {
    resume.style.display = "inherit";
  } else {
    resume.style.display = "none";
  }
});

/////////////////////////////////////////////
/////////////////SlideShow//////////////////
///////////////////////////////////////////
let sliderImage = document.querySelectorAll(".slideshow__image");
let leftArrow = document.querySelector("#slideshow__left");
let rightArrow = document.querySelector("#slideshow__right");
let current = 0;
// clear all images
function reset() {
  for (let i = 0; i < sliderImage.length; i++) {
    sliderImage[i].style.display = "none";
  }
}
// Init slides
function startSlide() {
  reset();
  sliderImage[0].style.display = "inherit";
}
// Show prev slide
function slideLeft() {
  reset();
  sliderImage[current - 1].style.display = "inherit";
  current--;
}
// show next slide
function slideRight() {
  reset();
  sliderImage[current + 1].style.display = "inherit";
  current++;
}
// left arrow click
leftArrow.addEventListener("click", function () {
  if (current === 0) {
    current = sliderImage.length;
  }
  slideLeft();
});
// right arrow click
rightArrow.addEventListener("click", function () {
  if (current === sliderImage.length - 1) {
    current = -1;
  }
  slideRight();
});

/////////////////////////////////////////////
//////////////Display Icons/////////////////
///////////////////////////////////////////
parkingListIcon.addEventListener("click", function () {
  parkingList.style.display = "block";
  parkingListIcon.style.backgroundColor = "rgba(125,125,125,0.5)";
  startSlide();
});