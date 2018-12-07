class Carousel {
    constructor(carouselElement) {
        this.carouselElement = carouselElement;
        
        this.leftButton = this.carouselElement.querySelector(".left-button");
        
        this.rightButton = this.carouselElement.querySelector(".right-button");

        this.images = document.querySelectorAll(".carousel-img");

        this.images[0].style.display = "block";
        
        this.leftButton.addEventListener("click", () => this.moveLeft())

        this.rightButton.addEventListener("click", () => this.moveRight())
    }

    moveLeft() {
        console.log("Left button works!");
        this.images.forEach(image => image.style.display = "none");

      
    }

    moveRight() {
        console.log("Right button works!");
        this.images.forEach(image => image.style.display = "none");
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