"use strict";

const range = document.getElementById("range");
const passwordResult = document.querySelector(".password-result ");
const checkboxInput = document.querySelector(".checkbox-input");
const customCheckbox = document.querySelector(".custom-checkbox");
const medium = document.querySelector(".medium");
const first = document.querySelector(".first");
const second = document.querySelector(".second");
const third = document.querySelector(".third");
const fourth = document.querySelector(".fourth");
const characterNumber = document.querySelector(".character-number");
const btn = document.querySelector(".btn");
const inputUppercase = document.querySelector(".input-uppercase");
const inputLowercase = document.querySelector(".input-lowercase");
const includeNumbers = document.querySelector(".include-numbers");
const inputSymbols = document.querySelector(".input-symbols");
const copy = document.querySelector(".copy");

function passwordGenerator() {
  copy.style.display = "none";
  let characterSet = "";
  let passwordStrength = 0;

  if (inputUppercase.checked) {
    characterSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    passwordStrength++;
  }
  if (inputLowercase.checked) {
    characterSet += "abcdefghijklmnopqrstuvwxyz";
    passwordStrength++;
  }
  if (includeNumbers.checked) {
    characterSet += "0123456789";
    passwordStrength++;
  }
  if (inputSymbols.checked) {
    characterSet += "~!@#$%^&*()_+{}[]|:;<>,>./";
    passwordStrength++;
  }

  let randomPassowrd = "";

  for (let i = 0; i < range.value; i++) {
    const randomIndex = Math.floor(Math.random() * characterSet.length);
    randomPassowrd += characterSet[randomIndex];
  }

  if (
    !inputUppercase.checked &&
    !inputLowercase.checked &&
    !includeNumbers.checked &&
    !inputSymbols.checked
  ) {
    passwordResult.innerHTML = "";
    medium.textContent = "";
  } else {
    passwordResult.innerText = randomPassowrd;
  }

  // strength line, change color

  if (passwordStrength == 1) {
    medium.textContent = "TOO WEAK!";
    first.style.background = "#F64A4A";
    first.style.border = "#F64A4A";
  } else {
    first.style.background = "";
    first.style.border = "";
  }
  if (passwordStrength == 2) {
    medium.textContent = "WEAK";
    first.style.background = "#FB7C58";
    first.style.border = "#FB7C58";
    second.style.background = "#FB7C58";
    second.style.border = "#FB7C58";
  } else {
    second.style.background = "";
    second.style.border = "";
  }
  if (passwordStrength == 3) {
    medium.textContent = "MEDIUM";
    first.style.background = "#F8CD65";
    first.style.border = "#F8CD65";
    second.style.background = "#F8CD65";
    second.style.border = "#F8CD65";
    third.style.background = "#F8CD65";
    third.style.border = "#F8CD65";
  } else {
    third.style.background = "";
    third.style.border = "";
  }
  if (passwordStrength == 4) {
    medium.textContent = "STRONG";
    first.style.background = "#A4FFAF";
    first.style.border = "#A4FFAF";
    second.style.background = "#A4FFAF";
    second.style.border = "#A4FFAF";
    third.style.background = "#A4FFAF";
    third.style.border = "#A4FFAF";
    fourth.style.background = "#A4FFAF";
    fourth.style.border = "#A4FFAF";
  } else {
    fourth.style.background = "";
    fourth.style.border = "";
  }
}

// color changer for slider

range.addEventListener("input", () => {
  characterNumber.innerHTML = range.value;
  let value = range.value;
  range.innerHTML = range.value;
  range.style.background =
    "linear-gradient(to right, #A4FFAF 0%, #A4FFAF " +
    value * 5 +
    "%, #18171F " +
    value * 5 +
    "%, #18171F 100%)";
});

// copy line

function copied() {
  copy.style.display = "flex";
}
