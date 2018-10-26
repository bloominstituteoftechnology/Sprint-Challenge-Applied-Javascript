class Carousel {
    constructor(carouselElement) {
        this.carouselElement = carouselElement;
        console.log(this.carouselElement);

        this.leftButton = document.querySelector('.left-button');
        this.rightButton = document.querySelector('.right-button');

        this.images = this.carouselElement.querySelectorAll('.carousel-img');
        

        this.images = new Image(this.images);
       
        console.log(this.images[0]);

        this.leftButton.addEventListener('click', () => this.leftScroll());
        this.rightButton.addEventListener('click', () => this.rightScroll());

    }
    leftClick() {


    }
    rightClick() {

    }
    displayImg() {
        
    }

}

class Image {
    constructor(imgElement) {
        this.imgElement = imgElement;
        console.log(this.imgElement);
    }
}

let carousel = document.querySelectorAll('.carousel');


carousel = Array.from(carousel).map( item => new Carousel(item));


let carouselImages = document.querySelectorAll('.carousel-img')


carouselImages[0].displayImg;


/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/