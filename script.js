"use strict";

const modal = document.querySelector(".modal");
const overLay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

const openModal = function () {
  console.log("modal clicked");
  modal.classList.remove("hidden"); // * inja select nemikonim  pas . ro nadarim
  overLay.classList.remove("hidden");
};

const clsoeModal = function () {
  modal.classList.add("hidden");
  overLay.classList.add("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener("click", openModal);
}

btnCloseModal.addEventListener("click", clsoeModal);
overLay.addEventListener("click", clsoeModal);
