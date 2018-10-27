class Carousel {
  constructor(element) {
    this.element = element;
    this.leftBtn = document.querySelector(".left-button");
    this.rightBtn = document.querySelector(".right-button");
    this.leftBtn.addEventListener("click", () => minusImg(imgIndex));
    this.rightBtn.addEventListener("click", () => plusImg(imgIndex));
  }
}

let carousel = new Carousel();
let allImgs = document.querySelectorAll(".carousel img");
let imgIndex = 0;

function showImg() {
  for (let i = 0; i < allImgs.length; i++) {
    allImgs[i].style.display = "none";
  }
  if (imgIndex > allImgs.length - 1) {
    imgIndex = 0;
  }
  if (imgIndex < 0) {
    imgIndex = allImgs.length - 1;
  }

  allImgs[imgIndex].style.display = "block";
}

showImg(imgIndex);

function plusImg() {
  showImg(imgIndex++);
}

function minusImg() {
  showImg(imgIndex--);
}

function currentSlide() {
  showImg(imgIndex);
}
