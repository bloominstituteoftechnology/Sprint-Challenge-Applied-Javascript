class Carousel {
    constructor(element){
        this.element = element;
        this.left = this.element.querySelector(".left-button");
        this.right = this.element.querySelector(".right-button");
        
        //click handlers for left click and right click
        this.left.addEventListener("click", () => {this.leftClick()
        })
        this.right.addEventListener("click", () => {this.rightClick()
        })


        // Adding images to element -- this is where it seems to break

        this.images = this.element.querySelectorAll("img");
        this.currentImage = 1;
        this.init()
    }


    init() {
        this.images[this.currentImage].style.display = "block";
    }

    // LeftClick Method
    leftClick() {
        if (this.currentImage === 0) return;
        this.images[this.currentImage].style.display = "none"
        this.currentImage = this.currentImage - 1;
        this.images[this.currentImage].style.display = "block"
    }
    // RightClick Method
    rightClick() {
        if (this.currentImage === this.images.length -1) return;
        this.images[this.currentImage].style.display = "none"
        this.currentImage = this.currentImage + 1;
        this.images[this.currentImage].style.display = "block" 
    }
}


let carousel = document.querySelector(".carousel");
carousel = new Carousel(carousel);


/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. Those buttons are gonna need some click handlers.
    3. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    4. Have fun!
*/