"use strict";

const modal = document.querySelector(".modal");
const overLay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");
console.log(btnsOpenModal);

for (let i = 0; i < btnsOpenModal.length; i++) {
  console.log(
    btnsOpenModal[i].addEventListener("click", function () {
      console.log("Button clicked!", i);
      modal.classList.remove("hidden"); // * inja mesl bala select nemikonim  pas . ro nadarim
      overLay.classList.remove("hidden");
    })
  );
}

btnCloseModal.addEventListener("click", function () {
  modal.classList.add("hidden");
  overLay.classList.add("hidden");
});
