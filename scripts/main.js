let modalWindow = document.querySelector(".modal");
let buttons = document.querySelectorAll(".btn-modal");
let closeModalWindow = document.querySelector(".btn-close");
let buttonSubmit = document.querySelector(".btn-submit");

buttonSubmit.addEventListener("click", e => {
  e.preventDefault();
  modalWindow.classList.remove("modal--open");
  modalWindow.classList.add("modal--close");
});

buttons.forEach(el => {
  el.addEventListener("click", () => {
    modalWindow.classList.remove("modal--close");
    modalWindow.classList.add("modal--open");
  });
});

closeModalWindow.addEventListener("click", () => {
  modalWindow.classList.remove("modal--open");
  modalWindow.classList.add("modal--close");
});
