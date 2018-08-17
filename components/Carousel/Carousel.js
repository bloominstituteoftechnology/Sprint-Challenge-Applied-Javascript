class Carousel {
    constructor(element) {
        this.element = element;
        this.leftButton = element.querySelector('.left-button');
        this.rightButton = element.querySelector('.right-button');
        this.images = element.querySelectorAll('img');
        this.currentIndex = 0;
        this.leftButton.addEventListener('click',
            () => {if (this.currentIndex > 0) this.left()});
        this.rightButton.addEventListener('click',
            () => {if (this.currentIndex < this.images.length - 1) this.right()});
    }

    left() {
        this.images[this.currentIndex].style.display = 'none';
        this.currentIndex = this.currentIndex - 1;
        this.images[this.currentIndex].style.display = 'block';
    };
    right() {
        this.images[this.currentIndex].style.display = 'none';
        this.currentIndex = this.currentIndex + 1;
        this.images[this.currentIndex].style.display = 'block';
    };
}

let carousel = document.querySelector('.carousel');
carousel = new Carousel(carousel);

carousel.images[0].style.display = 'block';

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/