class Carousel {
     constructor(carouselElement) {
        this.carouselElement = carouselElement;
        this.currentIndex = 0;
        
        // Ref to all images, turn into array list, create new instance class and iterate. 
        this.image = Array.from(carouselElement.querySelectorAll('img').map(image => new CarouselImage(image));

        // select apply right click eventlistener to '.right-button' class
        this.rightButton = document.querySelector('.right-button');
        // Need to create rightClick method class in order to invoke
        this.rightButton.addEventListener('click', () =>this.rightClick());

        // select apply right left click eventlistener to '.left-button' class
        this.leftButton = document.querySelector('.left-button');
        // Need to create leftClick method class in order to invoke
        this.rightButton.addEventListener('click', () => this.leftClick());
    }
    // methods
    rightClick() {
        this.image
    }

    leftClick() {

    }

    
}

class CarouselImage() {
    constructor() {

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
