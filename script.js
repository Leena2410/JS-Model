"use strict";
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const buttonClose = document.querySelector(".close-modal");
const buttonShow = document.querySelectorAll(".show-modal");

for (let i = 0; i < buttonShow.length; i++) {
  buttonShow[i].addEventListener("click", openModal);
}

buttonClose.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

function closeModal() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

function openModal() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

document.addEventListener("keydown", function (e) {
  if (e.key == "Escape" && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
