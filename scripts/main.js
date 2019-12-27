class ModalWindow {
  constructor(domElement) {
    this.domElement = domElement;
    this.closeBtns = this.domElement.getElementsByClassName("btn-close");
    for (const closeBtn of this.closeBtns) closeBtn.addEventListener("click", () => this.close());
  }

  close() {
    this.domElement.classList.remove("modal--open");
    this.domElement.classList.add("modal--close");
  }

  open() {
    this.domElement.classList.remove("modal--close");
    this.domElement.classList.add("modal--open");
  }

}

const buttons = document.getElementsByClassName("btn-modal");
const buttonSubmit = document.getElementsByClassName("btn-submit")[0];

const modalWindowDOM = document.getElementsByClassName("modal")[0];
const modalWindow = new ModalWindow(modalWindowDOM);

buttonSubmit.addEventListener("click", e => {
  e.preventDefault();
  modalWindow.close();
});

for (const button of buttons) button.addEventListener("click", () => modalWindow.open());
