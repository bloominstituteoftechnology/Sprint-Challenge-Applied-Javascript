class Carousel {
    constructor(carouselElement){
        this.carouselElement = carouselElement;
        // store current index in a variable
        this.currentIndex = 0;
            //Get the left button
            this.leftButton = document.querySelector(".left-button");
            //Get the right button
            this.rightButton = document.querySelector(".right-button");
            //Gets all images in the carousel
            this.images = document.querySelectorAll(".carousel img");
            this.enabled = true;
            this.leftButton.addEventListener("click", event => this.clickedLeft());
            this.rightButton.addEventListener("click", event => this.clickedRight());
        }
        clickedRight() {
            this.images[this.currentIndex].style.display = "none";
            this.currentIndex = this.currentIndex + 1 === this.images.length ?
                0 : this.currentIndex + 1;
            this.images[this.currentIndex].style.display = "block";
            TweenMax.staggerFrom(this.images, 0.3, {
                opacity: 0.1,
                ease: Back.easeOut.config(1.7),
                x: 400
            });
        }
        clickedLeft() {
            this.images[this.currentIndex].style.display = "none";
            this.currentIndex = this.currentIndex ?
                this.currentIndex - 1 : this.images.length - 1;
            this.images[this.currentIndex].style.display = "block";
            TweenMax.staggerFrom(this.images, 0.3, {
                opacity: 0.1,
                ease: Back.easeOut.config(1.7),
                x: -400
            });
        }
    }
    

    let carousel = document.querySelectorAll('.carousel');
    new Carousel(carousel);

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
