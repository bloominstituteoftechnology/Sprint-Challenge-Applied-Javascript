class Carousel {
    constructor(element){
        this.element = element;
        this.leftButton = document.querySelector(".left-button");
        this.rightButton = document.querySelector(".right-button");
        this.images = document.querySelectorAll(".carousel img");
        this.images = Array.from(this.images);
        this.images[0].style.display = "block";
        this.leftButton.addEventListener("click", (event) => this.goLeft(event));
        this.rightButton.addEventListener("click", (event) => this.goRight(event));
    }
    goLeft(){
            if (this.images[0].style.display == "block") {
                this.images[0].style.display = "none";
                this.images[3].style.display = "block";
            }
            else if (this.images[1].style.display == "block") {
                this.images[1].style.display = "none";
                this.images[0].style.display = "block";
            }
            else if (this.images[2].style.display == "block") {
                this.images[2].style.display = "none";
                this.images[1].style.display = "block";
            }
            else if (this.images[3].style.display == "block") {
                this.images[3].style.display = "none";
                this.images[2].style.display = "block";
            }
    }
    goRight(){
        if (this.images[0].style.display == "block") {
            this.images[0].style.display = "none";
            this.images[1].style.display = "block";
        }
        else if (this.images[1].style.display == "block") {
            this.images[1].style.display = "none";
            this.images[2].style.display = "block";
        }
        else if (this.images[2].style.display == "block") {
            this.images[2].style.display = "none";
            this.images[3].style.display = "block";
        }
        else if (this.images[3].style.display == "block") {
            this.images[3].style.display = "none";
            this.images[0].style.display = "block";
        }
}
}

let carousel = document.querySelectorAll(".carousel");
carousel = Array.from(carousel).map(element => new Carousel(element));


/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/