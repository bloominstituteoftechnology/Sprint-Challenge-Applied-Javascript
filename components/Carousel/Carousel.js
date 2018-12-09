class Carousel {
    constructor(carouselElement) {
        this.carouselElement = carouselElement;
        
        this.leftButton = this.carouselElement.querySelector(".left-button");
        
        this.rightButton = this.carouselElement.querySelector(".right-button");

        this.images = document.querySelectorAll(".carousel-img");

        this.currentImage = 0;

        this.images[this.currentImage].style.display = "block";
        
        this.leftButton.addEventListener("click", () => this.moveLeft());

        this.rightButton.addEventListener("click", () => this.moveRight());

        setInterval(() => this.moveRight(), 5000);
    }

    moveLeft() {
        this.images.forEach(image => image.style.display = "none");

        if (this.currentImage === 0) {
            this.currentImage = this.images.length - 1;
        } else { 
            this.currentImage = this.currentImage - 1;
        }
        this.images[this.currentImage].style.display = "block";
    }

    moveRight() {
        this.images.forEach(image => image.style.display = "none");

        if (this.currentImage === this.images.length - 1) {
            this.currentImage = 0;
        } else { 
            this.currentImage = this.currentImage + 1;
        }
        this.images[this.currentImage].style.display = "block";
    }
}

let carousels = document.querySelectorAll(".carousel").forEach(carousel => new Carousel(carousel));

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
