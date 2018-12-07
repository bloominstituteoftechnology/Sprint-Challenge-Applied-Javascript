class Carousel {
    constructor(element) {
        this.element = element;
    
        this.rightButton = document.querySelector(".right-button");
        console.log(this.rightButton)
        this.rightButton.addEventListener("click", () => {this.clickRight()});

        this.leftButton = document.querySelector(".left-button");
        this.leftButton.addEventListener("click", () => {this.clickLeft()});

        this.currentIndex = 0
        this.images = document.querySelectorAll(".carousel img")
        this.images[this.currentIndex].classList.add("current-img")
    }

    clickRight() {
        this.images[this.currentIndex].classList.remove("current-img")
        this.currentIndex += 1;
        if (this.currentIndex === this.images.length) {
            this.currentIndex = 0;
        }
        this.images[this.currentIndex].classList.add("current-img")
        
    }

    clickLeft() {
        this.images[this.currentIndex].classList.remove("current-img")
        this.currentIndex -= 1;
        if (this.currentIndex < 0) {
            this.currentIndex = this.images.length-1;
        }
        this.images[this.currentIndex].classList.add("current-img")
        
    }
}

let carousel = document.querySelector(".carousel");
carousel = new Carousel();
console.log(carousel)

console.log("hello")
/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/