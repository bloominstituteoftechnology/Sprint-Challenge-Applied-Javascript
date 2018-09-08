class Carousel {
    constructor(element) {
        this.element = element;

        this.images = element.querySelectorAll("img");
        this.images.forEach(image => image.style.display = "none");
        this.imageIndex = 0;
        this.images[this.imageIndex].style.display = null;

        this.leftButton = element.querySelector(".left-button");
        this.leftButton.addEventListener('click', () => { this.nextImage("left") });
        
        this.rightButton = element.querySelector(".right-button");
        this.rightButton.addEventListener('click', () => { this.nextImage("right") });
    }

    nextImage(direction) {
        this.images[this.imageIndex].style.display = "none";
        if (direction === "right") {
            this.imageIndex++;
            if (this.imageIndex >= this.images.length) this.imageIndex = 0;
        } else if (direction === "left") {
            this.imageIndex--;
            if (this.imageIndex < 0) this.imageIndex = this.images.length - 1;
        }
        this.images[this.imageIndex].style.display = null;
    }
}

let carousel = new Carousel(document.querySelector(".carousel"));

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/