class Carousel {
    constructor(element) {
        //reference the DOM element
        this.element = element;
        //grabbed reference to the carousel for left buttons
        this.leftButton = this.element.querySelector('.left-button')
        //grabbed reference to the carousel for right buttons
        this.rightButton = this.element.querySelector('.right-button')
        //grabbed a reference to all of the images
        this.images = this.element.querySelectorAll('img')
        //Set the index
        this.indexArr = [0,1,2,3]
        this.index = 0
        //Add event listener to execute script on click
        this.rightButton.addEventListener('click', () => this.scrollRight())
        this.leftButton.addEventListener('click', () => this.scrollLeft())

  }

    


}

//set the carousel reference
let carousel = document.querySelector('.carousel');
//create 'new' Carousel
carousel = new Carousel(carousel)

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/