
import {menu} from './main.js';
function modal() {
  const modalPhone = document.querySelector('.modal-phones');
  const phone = document.querySelectorAll('.modal-phone');
  const modalClosePhones = document.querySelector('.modal-phones__close-link');
  const modalEmptyPhones = document.querySelector('.modal-phones__empty');

  modalPhone.style.display = "none"
  for(let item of phone){
  item.addEventListener("click", function(event) {
    event.preventDefault();
    modalPhone.style.display = "flex"
    menu.style.display = "none"
    
  })
  }
  modalClosePhones.addEventListener("click", function(event) {
    event.preventDefault();
    modalPhone.style.display = "none"
  })
  modalEmptyPhones.addEventListener("click", function(event) {
    modalPhone.style.display = "none"
 })
}
modal()