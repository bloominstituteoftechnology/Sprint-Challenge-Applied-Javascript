class Carousel {
    constructor(element) {
        this.element = element;
        this.leftArrow = element.querySelector(".carousel .left-button");
        this.rightArrow= element.querySelector(".carousel .right-button");
        this.index = 0;
        this.image = element.querySelectorAll("img")[this.index];
        this.image.style.display = "block";
        this.images = element.querySelectorAll(".carousel img");
        this.rightArrow.addEventListener("click", () => {
            this.rightImage();
        });
        this.leftArrow.addEventListener("click", () => {
            this.leftImage();
        });
    }

    check(){
        this.images.forEach(item => {
            item.style.display = "none";
        });
    }

    display(){
        this.images[this.index].style.display = "block";
    }

    rightImage() {
        if (this.index <Array.from(this.images).length - 1) {
            this.index++;
            this.check();
            this.display();
        }
    }
    leftImage() {
        if (this.index > 0) {
            this.index--;
            this.check();
            this.display();
        }
    }
}
/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

let carousel = document.querySelectorAll(".carousel");
console.log(carousel);
carousel.forEach(element => new Carousel(element));