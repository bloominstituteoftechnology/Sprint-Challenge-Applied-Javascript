class Carousel {
    constructor(element) {
        this.element = element;
        this.leftButton = this.element.find('.left-button');
        this.rightButton = this.element.find('.right-button');
        this.images = this.element.find('img');
        this.activeImage = $(this.images[0]);
        this.rightButton.click(() => { this.clickRight() })
        this.leftButton.click(() => { this.clickLeft() });
        
    }
}

let carousel = document.querySelector();

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/