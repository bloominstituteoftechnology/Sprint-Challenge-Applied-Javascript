class Carousel {
    constructor(element)
    this.element = element;
    // fetch references
    // add event listeners
    // ???
    
    this.rightButton = element.querySelector('.left-button');
    this.leftButton = element.querySelector('.right-button');
    this.prettyPicturers = this.element.querySelectorAll('img');
    this.currentIndex = 0;


    this.element.addEventListener('click', () => this.goOnToNextImage());
}

goOnToNextImage(){
    const prettyPicturers = this.element.querySelectorAll('img');
    // Do I need to have a class for 'show' and 'hide'? .style.display = "none"?
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