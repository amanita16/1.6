const active = document.querySelectorAll(".services__btn");
active.forEach(function(item){
  item.classList.remove('active')
  item.addEventListener("click",function(){
    let activeBtn = item;
 active.forEach(function(item){
   item.classList.remove('active')
 })
 activeBtn.classList.add('active')
  })
});

export const menu = document.querySelector('.burger-menu');


function burgerMenu() {
  const burger = document.querySelector('.header__menu-link');
  const empty = document.querySelector('.empty');
  const closeMenu = document.querySelector('.header-burger-menu-link');
  if (window.innerWidth <= 1120) {
    burger.addEventListener("click", function(event) {
        event.preventDefault();
      menu.style.display = "flex"
      })
    closeMenu.addEventListener("click", function(event) {
      event.preventDefault();
      menu.style.display = "none"
    })
    empty.addEventListener("click", function() {
      menu.style.display = "none"
    })
    }
   
  }

burgerMenu()