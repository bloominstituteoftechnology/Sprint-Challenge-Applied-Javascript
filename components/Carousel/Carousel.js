class Carousels {
    constructor(element) {
        this.element = element;
        this.leftButtons = this.element.querySelectorAll('.left-button');
        this.leftButtons.addEventListener('click', () => {})
        this.rightButtons = this.element.querySelectorAll('.right-button');
    }
}

let carousels = document.querySelector('.carousel');
carousels = Array.from(carousels).map( carousel => Carousels(carousel));

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. Those buttons are gonna need some click handlers.
    3. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    4. Have fun!
*/