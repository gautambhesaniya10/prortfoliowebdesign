const p_btns = document.querySelector(".p-btns");
const p_btn = document.querySelectorAll(".p-btn");
const p_img_elem = document.querySelectorAll(".img-ovelay");

p_btns.addEventListener("click", (e) => {
    const p_btn_clicked = e.target;

    p_btn.forEach((curElem) => {
        curElem.classList.remove("p-btn-active")
    })

    p_btn_clicked.classList.add("p-btn-active")

    // find btn num

    const btn_num = p_btn_clicked.dataset.btnNum;

    const img_active = document.querySelectorAll(`.p-btn--${btn_num}`)


    p_img_elem.forEach((curEle) => {
        curEle.classList.add("p-image-not-active")
    })

    img_active.forEach((curEle) => {
        curEle.classList.remove("p-image-not-active")
    })

})


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
     autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });