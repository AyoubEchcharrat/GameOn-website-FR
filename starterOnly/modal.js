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
const modalBody = document.getElementById('modal-body');
const formData = document.querySelectorAll(".formData");
const closeModal = document.querySelector('.close');
const modal = document.querySelector('.bground');
const clickBtn = document.querySelector('.btn-submit');
const form = document.getElementById('reserve')

var firstName = document.getElementById('first');
var lastName = document.getElementById('last');
var condition = document.getElementById('checkbox1');
var birthdate = document.getElementById('birthdate');

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
closeModal.onclick = function () {
  if (modal.style.display !== "none") {
    modal.style.display = "none";
  }
}

// clear invalid msg every try
clickBtn.onclick = function () {
  const msg = document.querySelectorAll('.invalidMessage');
  msg.forEach(msg => {
    msg.remove();
  });
  verifyValidityFirst();
  verifyValidityLast();
  verifyValidityEmail();
  verifyValidityBirthdate();
  verifyValidityQuantity();
  verifyValidityTerms();
}

// not refreshing page on submit
function handleForm(e) {
  e.preventDefault();
  form.style.height = "0px";
  form.style.visibility = "hidden";
  modalBody.style.minHeight = "500px";
  var thanks = document.createElement('div');
  thanks.classList.add("thanks-message");
  modalBody.appendChild(thanks).innerText = "Merci ! Votre réservation a été reçue.";

} 
form.addEventListener('submit', handleForm);


// form invalid msg : prénom
function verifyValidityFirst() {
  let text;
  if (!firstName.validity.valid) {
    firstName.setCustomValidity(" ");
    var div = document.createElement('div');
    div.classList.add("invalidMessage");
    if (firstName.value.length < 2) {
      text = "Ce champ est obligatoire (2 caractères minimum)";
    } else {
      firstName.setCustomValidity("");
      text = "";
    } 
    document.getElementById('first').closest('.formData').appendChild(div).innerText = text;
  }
}



// form invalid msg : nom
function verifyValidityLast() {
  let text;
  if (!lastName.validity.valid) {
    lastName.setCustomValidity(" ");
    var div = document.createElement('div');
    div.classList.add("invalidMessage");
    if (lastName.value.length < 2) {
      text = "Ce champ est obligatoire (2 caractères minimum)";
    } else {
      lastName.setCustomValidity("");
      text = "";
    } 
    document.getElementById('last').closest('.formData').appendChild(div).innerText = text;
  }
}


// form invalid msg : email
function verifyValidityEmail() {
  let text;
  if (!email.validity.valid) {
    email.setCustomValidity(" ");
    var div = document.createElement('div');
    div.classList.add("invalidMessage");
    if (!email.value.includes("@")) {
      text = "Ce champ est obligatoire (doit contenir un @)";
    } else {
      email.setCustomValidity("");
      text = ""; 
    } 
    document.getElementById('email').closest('.formData').appendChild(div).innerText = text;
  }
}



// form invalid msg : birthdate
birthdate.max = new Date().toISOString().split("T")[0];

function verifyValidityBirthdate() {
  let text;
  if (!birthdate.validity.valid) {
    birthdate.setCustomValidity(" ");
    var div = document.createElement('div');
    div.classList.add("invalidMessage");
    if (birthdate.value.length == 0) {
      text = "Ce champ est obligatoire";
    } else {
      birthdate.setCustomValidity("");
      text = "";
    } 
    document.getElementById('birthdate').closest('.formData').appendChild(div).innerText = text;
  }
}
  


// form invalid msg : quantity
function verifyValidityQuantity() {
  let text;
  if (!quantity.validity.valid) {
    quantity.setCustomValidity(" ");
    var div = document.createElement('div');
    div.classList.add("invalidMessage");
    if (quantity.value.length == 0) {
      text = "Ce champ est obligatoire";
    } else {
      quantity.setCustomValidity("");
      text = "";
    } 
    document.getElementById('quantity').closest('.formData').appendChild(div).innerText = text;
  }
}

// form invalid msg : terms
function verifyValidityTerms() {
  let text;
  if (!condition.validity.valid) {
      condition.setCustomValidity(" ");
      var div = document.createElement('div');
      div.classList.add("invalidMessage");
      text = "Ce champ est obligatoire";
      document.getElementById('checkbox1').closest('.formData').appendChild(div).innerText = text;
  }
  condition.setCustomValidity("");
  }