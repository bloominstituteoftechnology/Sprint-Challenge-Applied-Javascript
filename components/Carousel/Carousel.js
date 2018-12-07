class Carousel {
    constructor(domElement){
        this.domElement = domElement;
        this.leftBtn = this.domElement.querySelector('.left-button');
        this.rightBtn = this.domElement.querySelector('.right-button');
        this.images = this.domElement.querySelectorAll('img')
        this.index = 0;
        this.currentSilde = this.images[0]
        this.currentSilde.style.display = "block"
        this.leftBtn.addEventListener('click', () => this.moveLeft());
        this.rightBtn.addEventListener('click', () => this.moveRight());

    }

    moveLeft(){
        this.images[this.index].style.display = "none";
        this.index = this.index ? this.index - 1 : this.images.length - 1;
        this.images[this.index].style.display = "block";
    }

    moveRight() {
        this.images[this.index].style.display = "none";
        this.index = this.index + 1 === this.images.length ? 0 : this.index + 1;
        this.images[this.index].style.display = "block";
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


const carousel = new Carousel(document.querySelector('.carousel'));