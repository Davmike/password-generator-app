"use strict";

const range = document.getElementById("range");
const passwordResult = document.querySelector(".password-result ");
const checkboxInput = document.querySelector(".checkbox-input");
const customCheckbox = document.querySelector(".custom-checkbox");
const medium = document.querySelector("medium");
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

function passwordGenerator() {
  let characterSet = "";
  if (inputUppercase.checked) {
    characterSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (inputLowercase.checked) {
    characterSet += "abcdefghijklmnopqrstuvwxyz";
  }
  if (includeNumbers.checked) {
    characterSet += "0123456789";
  }
  if (inputSymbols.checked) {
    characterSet += "~!@#$%^&*()_+{}[]|:;<>,>./";
  }

  let randomPassowrd = "";

  for (let i = 0; i < range.value; i++) {
    const randomIndex = Math.floor(Math.random() * characterSet.length);
    randomPassowrd += characterSet[randomIndex];
  }
  passwordResult.innerText = randomPassowrd;
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
