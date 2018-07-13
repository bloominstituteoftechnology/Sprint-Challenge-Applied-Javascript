class Carousel {
    constructor() {
        this.carousel = document.querySelector(".carousel");
        this.images = document.querySelectorAll(".carousel img");
        // console.log(this.images);
        this.images = Array.from(this.images);
        // this.images.forEach(img => {img.style.display = "block"});

        this.prevButton = document.querySelector(".left-button");
        this.nextButton = document.querySelector(".right-button");

        this.activeImg = this.images[0];
        console.log(this.activeImg.dataset.img);
        this.activeImg.style.display = "block";

        this.prevImg = this.images[this.images.length - 1];
        this.nextImg = this.images[1];        

        this.prevButton.addEventListener("click", () => {
            this.prevImg.style.display = "block";
            this.goToPrevious(this.activeImg, this.prevImg);
        });
        this.nextButton.addEventListener("click", () => {
            this.nextImg.style.display = "block";
            this.goToNext(this.activeImg, this.prevImg, this.nextImg);
        });
    }

    goToPrevious() {
        console.log(this);
        TweenMax.fromTo(this.prevImg, 2, {x:-1800}, {x:-600});
        TweenMax.fromTo(this.activeImg, 2, {x:600}, {x:1800});
        
        if ((this.activeImg.dataset.img) === 0) {
            this.activeImg = this.images[this.images.length - 1];
        } else {
            this.activeImg = this.images[this.activeImg.dataset.img - 1];
        }
        // console.log(this.activeImg);
        this.setPrevNext(this.activeImg, this.prevImg, this.nextImg);
    }

    goToNext() {
        TweenMax.fromTo(this.activeImg, 2, {x:600}, {x:-600});
        TweenMax.fromTo(this.nextImg, 2, {x:600}, {x:-600});

        if ((this.activeImg.dataset.img) === (this.images.length - 1)) {
            this.activeImg = this.images[0];
        } else {
            this.activeImg = this.images[this.activeImg.dataset.img + 1];
        }
        // console.log(this.activeImg, this.prevImg);
        this.setPrevNext();
    }
    
    setPrevNext() {
        // console.log(this);
        if (this.activeImg.dataset.img === 0) {
            this.prevImg = this.images[this.images.length - 1];
        } else {
            this.prevImg = this.images[this.activeImg.dataset.img - 1];
        }
        if ((this.activeImg.dataset.img) === (this.images.length - 1)) {
            this.nextImg = this.images[0];
        } else {
            this.nextImg = this.images[this.activeImg.dataset.img + 1];
        }
        // console.log(img2);
        // console.log(this.prevImg);
    }
}

let carousel = $(".carousel");
carousel = Array.from(carousel).map(carousel => new Carousel(carousel));
// let carousel = new Carousel;

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. Those buttons are gonna need some click handlers.
    3. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    4. Have fun!
*/