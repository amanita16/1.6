const active = document.querySelectorAll(".services__btn");
active.forEach(function(item){

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
burgerMenu();


function textHidden() {
const textDesc = document.querySelector('.services__discription-hidden');
const textHidd = document.querySelector('.discription-text__hidden');
const textHiddImg = document.querySelector('.services__visible-img')
textHidd.style.display = "none"
textDesc.addEventListener('click', function(){
  // textHidd.style.display = 'block'
  if (textHidd.style.display === "none"){
    textHidd.style.display = 'block';
    textDesc.innerHTML = "Cкрыть";
    textHiddImg.style.transform = "rotate(180deg)"
  }
  else{
    textHidd.style.display = "none";
    textDesc.innerHTML = "Читать далее";
    textHiddImg.style.transform = "rotate(0deg)"
  }
})
}
textHidden()

function tab(){
  const tabItem = document.querySelectorAll('.services__item');
  const tabContent = document.querySelectorAll('.tab');
  let tabName;
  tabItem.forEach(item =>{
    item.addEventListener('click',selectTabNav)
  })
  function selectTabNav(){
tabItem.forEach(item => {
  item.classList.remove('is-active')
 
});
this.classList.add('.is-active')
tabName = this.getAttribute('data-tab')
selectTabContent(tabName);
  }
  function selectTabContent(){
tabContent.forEach(item => {
  item.classList.contains(tabName) ? item.classList.add('is-active') : item.classList.remove('is-active')
})
  }
}
tab()