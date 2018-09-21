class Carousel {
    constructor(element) {
        this.element = element;
        this.leftArrow = this.element.querySelector('.left-button');
        this.rightArrow = this.element.querySelector('.right-button');
        this.images = this.element.querySelectorAll('img');
        this.currentIndex = 0;

        this.leftArrow.addEventListener('click', () => this.leftArrowClick());

        this.rightArrow.addEventListener('click', () => this.rightArrowClick());
    }

    leftArrowClick() {
        this.images[this.currentIndex].style.display = 'none';
        this.currentIndex = negMod((this.currentIndex - 1), this.images.length);
        this.images[this.currentIndex].style.display= 'block';
    }

    rightArrowClick() {
        this.images[this.currentIndex].style.display = 'none';
        this.currentIndex = negMod((this.currentIndex + 1), this.images.length);
        this.images[this.currentIndex].style.display= 'block';
    }
}

// create reference to carousel div and create a Carousel object from it
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

function negMod(n,m) {
    return ((n % m) + m) % m;
}