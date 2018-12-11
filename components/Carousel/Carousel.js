class Carousel {
    constructor(carouselElement) {
        //assign this.carouselElement to the carouselElement DOM reference
        this.carouselElement = carouselElement;

        //left button selector
        this.leftButton = carouselElement.querySelector('.left-button');

        //right button selector
        this.rightButton = carouselElement.querySelector('.right-button');

        //an array of all carousel images
        this.images = Array.from(document.querySelectorAll('.cimg'));

        //a property that tracks the current carousel image displayed
        this.currentImg = this.images[0];
        //grabs the current image's custom data attribute 
        this.currentImgData = this.currentImg.dataset.cimg;

        //convert each item in the images array to a new instance of CarouselImage
        this.images = this.images.map(i => new CarouselImage(i));

        //Click event listeners for the left and right buttons
        this.leftButton.addEventListener('click', (e) => this.previousImg());
        this.rightButton.addEventListener('click', (e) => this.nextImg());
    }

    //previousImg should change the current image displayed to the previous image in the images array
    previousImg() {
        console.log('left button click');
        
        //if currentImg is the first item in the images array
        if(this.currentImgData === "1") {
            this.currentImg = this.images[3];
        } else {
            // this.currentImg = this.images[Number(this.currentImgData) - 1];
            // console.log(this.currentImg);
        }
    }

    //nextImg should change the current image displayed to the next image in the images array
    nextImg(){
        console.log('right button click');
        
    }
}

class CarouselImage {
    constructor(carouselImage) {
        this.carouselImage = carouselImage;
    }
    nextImg() {

    }
    previousImg() {

    }
}

//select all elements with the carousel class
let carousel = document.querySelectorAll('.carousel');
//convert each into a new instance of Carousel
carousel.forEach(c => new Carousel(c));

//set the first image to be displayed
let firstImg = document.querySelector('.selected-cimg');
window.addEventListener('load', () => {
    firstImg.style.display = "flex";
    return firstImg.style.zIndex = "-1";
});

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/