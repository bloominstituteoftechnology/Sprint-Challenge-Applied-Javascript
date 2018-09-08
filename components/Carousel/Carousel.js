class Carousel {
    constructor(element) {
        //assign this.element to the element reference
        this.element = element;
        //create reference to left button
        this.leftButton = this.element.querySelector('.left-button');
        //create reference to right button
        this.rightButton = this.element.querySelector('.right-button');
        //create reference to images in carousel
        this.images = document.querySelectorAll('.carousel .img');
        //set current index
        this.current = this.images[0];
        //add 'click' event handler to buttons
        this.rightButton.addEventListener('click', () => this.clickHandlerRight());
        this.leftButton.addEventListener('click', () => this.clickHandlerLeft());
    }
    //add click handler for right button
    clickHandlerRight(){
        if(this.current.display.style = ''){
            this.images.display.style = 'none';
            this.current++;
        }
    }
    //add click handler for left button
    clickHandlerLeft(){
        this.current--;
        this.images.display.style = '';
    }
}

//create a reference to carousel
let carousel = document.querySelector('.carousel');

//display images in carousel


/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/