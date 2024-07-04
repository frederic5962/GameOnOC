 function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalClose = document.querySelector(".close");

// launch modal event
modalBtn.forEach((btn) => { btn.addEventListener('click', () => modalbg.style.display = "block" )});
modalClose.addEventListener('click', () => modalbg.style.display = "none");

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

document.querySelector('.modal_content button').addEventListener('click', () => modalSuccess.style.display = "none");
