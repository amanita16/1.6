import {menu} from './main.js';



function modalComm() {
  const modal = document.querySelector('.modal-comm');
  const message = document.querySelectorAll('.modal-message');
  const modalClose = document.querySelector('.modal-comm__close-link');
  const modalEmpty = document.querySelector('.modal-comm__empty');

  modal.style.display = "none"
  for(let item of message){
  item.addEventListener("click", function(event) {
    event.preventDefault();
    modal.style.display = "flex"
    menu.style.display = "none"
    
  })
  }
  modalClose.addEventListener("click", function(event) {
    event.preventDefault();
    modal.style.display = "none"
  })
  modalEmpty.addEventListener("click", function(event) {
    modal.style.display = "none"
  })
}
modalComm()
