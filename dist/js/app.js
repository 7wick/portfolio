//selecting DOM items
var menuBtn = document.querySelector(".menu-btn");
var btnLine = document.querySelector(".btn-line");
var menu = document.querySelector(".vertical-menu");
var navItem = document.querySelectorAll(".nav-item");
var nav = document.querySelector("nav");
var scrollBtn = document.querySelector(".scroll-button a");
var body = document.querySelector("body");
var navBar = document.querySelector(".navbar");
var navLinks = document.querySelectorAll(".menu1 li a");

if (scrollBtn) {
  scrollBtn.style.display = "none";
}

window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
    document.getElementById("mylogo").src = "images/digit-7.png";
  } else {
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
    document.getElementById("mylogo").src = "images/digit-7.png";
  }
};

if (
  document.getElementById("education-desc") &&
  document.getElementById("work-desc")
) {
  document.getElementById("education-desc").style.display = "block";
  document.getElementById("work-desc").style.display = "none";
  document.getElementById("education").classList.add("currentMenu");
  document.getElementById("work").classList.remove("currentMenu");
}

var showMenu = false;

menuBtn.onclick = function () {
  navBar.classList.add("active");
  menuBtn.style.display = "none";
  menuBtn.style.pointerevents = "none";
  body.style.overflow = "hidden";
  scrollBtn.style.pointerevents = "none";
};

function closeMenu() {
  navBar.classList.remove("active");
  menuBtn.style.display = "block";
  menuBtn.style.pointerevents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerevents = "auto";
}

for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function () {
    navBar.classList.remove("active");
    //menuBtn.style.opacity = "1";
    menuBtn.style.pointerevents = "auto";
    body.style.overflow = "auto";
    scrollBtn.style.pointerevents = "auto";
  });
}

function switchVisible(id) {
  if (id == "education") {
    if (document.getElementById("education-desc").style.display == "none") {
      document.getElementById("education-desc").style.display = "block";
      document.getElementById("work-desc").style.display = "none";
      document.getElementById("education").classList.add("currentMenu");
      document.getElementById("work").classList.remove("currentMenu");
    }
  } else if (id == "work") {
    if (document.getElementById("work-desc").style.display == "none") {
      document.getElementById("education-desc").style.display = "none";
      document.getElementById("work-desc").style.display = "block";
      document.getElementById("education").classList.remove("currentMenu");
      document.getElementById("work").classList.add("currentMenu");
    }
  }
}

function showDesc(id) {
  if (id == "todoApp-menu") {
    document.getElementById("toDoApp").style.display = "block";
    document.getElementById("kharchaBook").style.display = "none";
    document.getElementById("squadManagement").style.display = "none";
  } else if (id == "kharchaBook-menu") {
    document.getElementById("kharchaBook").style.display = "block";
    document.getElementById("toDoApp").style.display = "none";
    document.getElementById("squadManagement").style.display = "none";
  } else if (id == "squadManage-menu") {
    document.getElementById("squadManagement").style.display = "block";
    document.getElementById("toDoApp").style.display = "none";
    document.getElementById("kharchaBook").style.display = "none";
  }
}

function showMenuBtn() {
  if (menuBtn.style.display == "none") {
    menuBtn.style.display = "block";
  } else {
    menuBtn.style.display = menuBtn.style.display;
  }
}
