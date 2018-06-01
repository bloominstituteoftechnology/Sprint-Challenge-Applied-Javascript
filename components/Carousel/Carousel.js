class Carousel {
    constructor (element) {
        this.element = element;
        this.left = document.querySelector('.left-button');
    }
}

class LeftBtn {
    constructor (element, parent) {
        this.element = element;
        this.parent = parent;
        this.element.addEventListener('click', () => {
            console.log('Left Button is clicked');
        });
    }
}



let carousels = document.querySelectorAll('.carousel');
carousels = Array.from(carousels).map(carousel => new Carousel(carousel))

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. Those buttons are gonna need some click handlers.
    3. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    4. Have fun!
*/

