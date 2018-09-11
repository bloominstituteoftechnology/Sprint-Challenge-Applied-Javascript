class Carousel {
    constructor(element) {
        this.element = element;
        this.leftButton = document.querySelector('.carousel .left-button');
        this.rightButton = document.querySelector('.carousel .right-button');
        this.leftButton.addEventListener('click', () => {this.imageLeft()});
        this.rightButton.addEventListener('click', () => {this.imageRight()});
        this.currentImage = 0;
        }
    

    imageLeft () {
        Array.from(images).forEach((item) => {
            item.style.display = 'none';
        })
        if (this.currentImage === 0) {
            this.currentImage = 3;
        } else {
            this.currentImage -= 1;
        }
        images[this.currentImage].style.display = 'block';
    }

    imageRight() {
        Array.from(images).forEach((item) => {
            item.style.display = 'none';
        })
        if (this.currentImage === 3) {
            this.currentImage = 0;
        } else {
            this.currentImage += 1;
        }
        images[this.currentImage].style.display = 'block';
    }

}

let carousel = document.querySelector('.carousel');
carousel = new Carousel;

images = document.querySelectorAll('.carousel img');

images[0].style.display = 'block';
// images = Array.from(this.images).map((image) => {
//     return new Carousel(image);
// });

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/