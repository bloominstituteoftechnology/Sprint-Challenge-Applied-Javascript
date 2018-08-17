class Carousel {
    constructor(element) {
        this.element = element;
        this.leftButton = document.querySelector(".carousel .left-button");
        this.rightButton = document.querySelector(".carousel .right-button");
        this.images = document.querySelectorAll(".carousel img");
        this.currentIndex = 0;
        this.imageCount = this.images.length;

        this.leftButton.addEventListener('click', () => {this.selectLeft();});
        this.rightButton.addEventListener('click', () => {this.selectRight();});
    }

    selectLeft() {

    }

    selectRight() {
        
    }
}

let carousel = document.querySelector(".carousel");

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/