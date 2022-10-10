"use strict";

/* const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnsOpenModal = document.querySelector(".btn--show-modal");
const btnCloseModal = document.querySelector(".btn--close-modal");

function openModal(e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}
function hideModal() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && openModal) {
    hideModal();
  }
});
btnsOpenModal.addEventListener("click", openModal);
btnCloseModal.addEventListener("click", hideModal);
overlay.addEventListener("click", hideModal); */

const btnOpenModal = document.querySelector(".btn--show-modal");
const btnHideModal = document.querySelector(".btn--close-modal");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

function showModal(e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}
function closeModal() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
btnOpenModal.addEventListener("click", showModal);
btnHideModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
