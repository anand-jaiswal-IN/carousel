const leftbtn = document.querySelector(".leftbtn");
const rightbtn = document.querySelector(".rightbtn");

const carousel_item = document.querySelectorAll(".carousel-item");
let activeIndex = 0;

leftbtn.addEventListener("click", (event) => {
  changeCarouselItem(-1);
});

rightbtn.addEventListener("click", (event) => {
  changeCarouselItem(1);
});

function changeCarouselItem(change) {
  carousel_item[activeIndex].classList.remove("carousel-item-active");

  activeIndex += change;

  if (activeIndex > carousel_item.length - 1) {
    activeIndex = 0;
  } else if (activeIndex < 0) {
    activeIndex = carousel_item.length - 1;
  }

  carousel_item[activeIndex].classList.add("carousel-item-active");
}
