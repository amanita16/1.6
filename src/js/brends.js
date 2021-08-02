



 new Swiper('.swiper-container',{

  slidesPerView: 1,
  spaceBetween: 1,
  loop: true,
   pagination: {
    el: '.swiper-pagination',
     clickable: true,
     type: 'bullets',
       },
})

function showBrends() {
  const brendsVisible = document.querySelector(".brends__visible");
  const brendsHidden = document.querySelectorAll(".hidden");
  const brendsImage = document.querySelector(".brends__visible-img");

  brendsHidden.forEach((item) => {
    brendsVisible.addEventListener("click", function() {
    if (item.style.display === "none") {
      item.style.display = "flex";
      brendsVisible.innerHTML = "Cкрыть";
      brendsVisible.style.marginTop = "40px";
      brendsImage.style.transform = "rotate(180deg)";
    } 
    else {
      item.style.display = "none";
      brendsVisible.innerHTML = "Показать все";
      brendsImage.style.transform = "rotate(0deg)";
    }
  })
})
}
showBrends();