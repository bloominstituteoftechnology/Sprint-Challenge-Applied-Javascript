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
            this.goToPrevious(this.activeImg, this.prevImg, this.nextImg);
        });
        this.nextButton.addEventListener("click", () => {
            this.nextImg.style.display = "block";
            this.goToNext(this.activeImg, this.prevImg, this.nextImg);
        });
    }

    goToPrevious(img0, img1, img2) {
        console.log(this);
        TweenMax.fromTo([img1], 2, {x:-600}, {x:600});
        TweenMax.fromTo([img0], 2, {x:-600}, {x:600});
        
        if ((img0.dataset.img) === 0) {
            img0 = this.images[this.images.length - 1];
        } else {
            img0 = this.images[img.dataset.img - 1];
        }
        console.log(this.activeImg);
        this.setPrevNext(img0, img1, img2);
    }

    goToNext(img0, img1, img2) {
        TweenMax.fromTo([img0], 2, {x:600}, {x:-600});
        TweenMax.fromTo([img2], 2, {x:600}, {x:-600});

        if ((img0.dataset.img) === (this.images.length - 1)) {
            img0 = this.images[0];
        } else {
            img0 = this.images[img0.dataset.img + 1];
        }
        // console.log(this.activeImg);
        this.setPrevNext(img0, img1, img2);
    }
    
    setPrevNext(img0, img1, img2) {
        console.log(this);
        if ((this.activeImg.dataset.img) === 0) {
            img1 = this.images[this.images.length - 1];
        } else {
            img1 = this.images[this.activeImg.dataset.img - 1];
        }
        if ((this.activeImg.dataset.img) === (this.images.length - 1)) {
            img2 = this.images[0];
        } else {
            img2 = this.images[this.activeImg.dataset.img + 1];
        }
        // console.log(this.prevImg);
    }
}

// let carousel = $();
let carousel = new Carousel;

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. Those buttons are gonna need some click handlers.
    3. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    4. Have fun!
*/