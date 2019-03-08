class Carousel {
    constructor(carousel) {
        this.carousel = carousel;
        this.imgs = this.carousel.querySelectorAll("img");
        console.log(imgs);


        this.leftButton = this.carousel.querySelector(".left-button");
        this.rightBuytton = this.carousel.querySelector(".right-button");
        this.index = 0;
        this.imgs[this.index].style.display = "block";

        this.rightButton.addEventListener("click", () => this.toggleRight());
        this.leftButton.addEventListener("click", () => this.toggleLeft());
    }
    toggleRight() {
        this.imgs[this.index].style.display = "none";

        if (this.index ===  this.imgs.length-1) {
            this.index = 0;
        } else {
            this.index++
        }
        this.imgs[this.index].style.display = "block";
    }

    toggleLeft() {
        this.imgs[this.index].style.display = "none";

        if (this.index === 0) {
            this.index = this.imgs.length -1;
        } else {
            this.index--;
        }
        this.imgs[this.index].style.display = "block";
    }

}


const carousels = document.querySelector(".carousel");
carousels.forEach(carousel => new Carousel(carousel));





