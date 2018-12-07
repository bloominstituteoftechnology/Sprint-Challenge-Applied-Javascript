class Carousel {
    constructor(element) {
        this.carousel = element;
        this.leftBtn = element.querySelector(".left-button");
        this.rightBtn = element.querySelector(".right-button");
        this.images = element.querySelectorAll("img");
        this.ct = 0;
        this.imageNum = this.images.length;
        this.curr = this.images[this.ct];
        this.curr.classList.add("show")
        this.leftBtn.addEventListener("click", () => this.scrollLeft());
        this.rightBtn.addEventListener("click", () => this.scrollRight());
    }
    scrollLeft() {
        if (this.ct === 0) {
            this.ct = this.imageNum-1;
        } else {
            this.ct -= 1;
        }
        this.curr.classList.remove("show")
        this.curr = this.images[this.ct];
        this.curr.classList.add("show")
    }
    scrollRight() {
        if (this.ct === this.imageNum-1) {
            this.ct = 0;
        } else {
            this.ct += 1;
        }
        this.curr.classList.remove("show")
        this.curr = this.images[this.ct];
        this.curr.classList.add("show")
    }
}

let carousel = document.querySelector(".carousel");
let ref = new Carousel(carousel)

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/