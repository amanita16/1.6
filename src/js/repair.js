function showRepair() {
  const repairVisible = document.querySelector(".repair__visible");
  const repairHidden = document.querySelectorAll(".repair__item-hidden");
  const repairImage = document.querySelector(".repair__visible-img");
// const repairFour = document.querySelector('.repair__item-four')
  repairHidden.forEach((item) => {
    repairVisible.addEventListener("click", function() {
    if (item.style.display === "none") {
      item.style.display = "flex";
      // repairFour.style.display = "flex";
      repairVisible.innerHTML = "Cкрыть";
      repairVisible.style.marginTop = "40px";
      repairImage.style.transform = "rotate(180deg)";
    } 
    else {
      item.style.display = "none";
      // if (window.innerWidth <= 768){
      //   repairFour.style.display = "none";
      // }
      repairVisible.innerHTML = "Показать все";
      repairImage.style.transform = "rotate(0deg)";
    }
  })
})
}
showRepair();