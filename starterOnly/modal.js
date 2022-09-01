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
const closeModal = document.querySelector('.close');
const modal = document.querySelector('.bground');

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


// form invalid msg : prénom
firstName.oninvalid = function(e) {
	e.target.setCustomValidity("");
	if (!e.target.validity.valid) {
		if (e.target.value.length == 0) {
e.target.setCustomValidity("Ce champ est obligatoire");
		} else {
e.target.setCustomValidity("Entrez un prénom correct");
		}
	}
};

// form invalid msg : nom
lastName.oninvalid = function(e) {
	e.target.setCustomValidity("");
	if (!e.target.validity.valid) {
		if (e.target.value.length == 0) {
e.target.setCustomValidity("Ce champ est obligatoire");
		} else {
e.target.setCustomValidity("Entrez un nom correct");
		}
	}
};


// form invalid msg : email
email.oninvalid = function(e) {
	e.target.setCustomValidity("");
	if (!e.target.validity.valid) {
		if (e.target.value.length == 0) {
e.target.setCustomValidity("Vous devez entrer votre adresse e-mail");
		} else {
e.target.setCustomValidity("Entrez une adresse e-mail valide");
		}
	}
};

// form invalid msg : birthdate
birthdate.max = new Date().toISOString().split("T")[0];

birthdate.oninvalid = function(e) {
	e.target.setCustomValidity("");
	if (!e.target.validity.valid) {
		if (e.target.value.length == 0) {
e.target.setCustomValidity("Vous devez entrer votre date de naissance");
		} else {
e.target.setCustomValidity("Entrez une date valide");
		}
	}
};

// form invalid msg : terms
condition.oninvalid = function(e) {
	e.target.setCustomValidity("");
	if (!e.target.validity.valid) {
e.target.setCustomValidity("Vous devez entrer votre date de naissance");
	}
};
