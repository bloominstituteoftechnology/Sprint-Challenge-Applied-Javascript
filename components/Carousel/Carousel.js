class Carousel {
    constructor(element) {
        //passes in the carousel node element
        this.element = element;
        
        this.leftButton = this.element.querySelector('.left-button');
        this.rightButton = this.element.querySelector('.right-button');
        this.images = this.element.querySelectorAll('img');
        this.index = Array.from(this.images).length - 1
        
        this.leftButton.addEventListener('click', this.cycleLeft.bind(this));
        this.rightButton.addEventListener('click', this.cycleRight.bind(this))
    }
    cycleLeft() {
        
    }
    
    cycleRight() {
        
    }
    
}

let carousel = document.querySelector('.carousel');
carousel = new Carousel(carousel);



/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

