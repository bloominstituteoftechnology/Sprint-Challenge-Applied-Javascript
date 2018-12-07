class Carousel {
    constructor(carouselElement) {
        this.carouselElement = carouselElement;
        //Store the current index in a variable
        this.currentIndex = 0;
        //Get the left button
        this.leftButton = document.querySelector(".left-button");
        //Get the right button
        this.rightButton = document.querySelector(".right-button");
        //Gets all images in the carousel
        this.images = document.querySelectorAll(".carousel img");
        this.leftButton.addEventListener("click", event => this.clickedLeft(event));
        this.rightButton.addEventListener("click", event => this.clickedRight(event));
    }
    clickedRight(event) {
        this.images[this.currentIndex].style.display = "none";
        this.currentIndex = this.currentIndex + 1 === this.images.length ?
            0 : this.currentIndex + 1;
        this.images[this.currentIndex].style.display = "block";
        TweenMax.from(this.images, 0.5, {
            x: 400,
            opacity: 0.1
          });
    }
    clickedLeft(event) {
        this.images[this.currentIndex].style.display = "none";
        
        this.currentIndex = this.currentIndex ?
            this.currentIndex - 1 : this.images.length - 1;
        this.images[this.currentIndex].style.display = "block";
        TweenMax.from(this.images, 0.5, {
            x: -400,
            opacity: 0.1
          });
    }
}


let carousel = document.querySelectorAll('.carousel');
new Carousel(carousel);

