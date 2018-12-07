class Carousel {
    constructor (element) {
        this.element = element;
        this.leftButton = this.element.querySelector('.left-button');
        this.rightButton = this.element.querySelector('.right-button');
        this.images = this.element.querySelectorAll('img');
        this.index = 0;
        this.lastIndex = 0;

        this.images.forEach(elem => elem.classList.remove('current-img'));
        this.images[0].classList.add('current-img');

        this.leftButton.addEventListener('click', _ => this.scroll(-1));
        this.rightButton.addEventListener('click', _ => this.scroll(+1));
    }

    scroll(increment) {
        this.lastIndex = this.index;
        this.index += increment;
        this.index = this.index % this.images.length;
        if (this.index < 0) {
            this.index += this.images.length;
        }
        
        this.instantTransition();
    }

    instantTransition() {
        this.images.forEach(elem => elem.classList.remove('current-img'));
        this.images[this.index].classList.add('current-img');
    }
}

let carousel = new Carousel(document.querySelector('.carousel'));

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/