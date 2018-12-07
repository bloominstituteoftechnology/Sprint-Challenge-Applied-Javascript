class Carousel {
    constructor(carouselElement){
        this.carouselElement = carouselElement;
        this.leftButton = document.querySelector('.carousel .left-button');
        this.rightButton = document.querySelector('.carousel .right-button');
        this.imageList = document.querySelectorAll('.carousel img');
        this.leftButton.addEventListener('click', () => this.slideLeft());
        this.rightButton.addEventListener('click', () => this.slideRight());
        this.imageList.style.display = 'flex';

        console.log(this.carouselElement);
    }

    slideLeft(){
        console.log('I clicked the left button!');
    }

    slideRight(){
        console.log('I clicked the right button!');
    }
}

// let carousel = document.querySelector('.carousel').forEach(item => new Carousel(item));

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/