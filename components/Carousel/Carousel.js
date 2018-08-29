class Carousel {
    constructor(carousel) {
        this.carousel = carousel;
        this.leftButton = carousel.querySelector('.left-button');
        this.rightButton = carousel.querySelector('.right-button');
        this.carouselImages = document.querySelectorAll('.carousel img');
        this.imageContainer = document.querySelector('.slider-images');
        this.width = carousel.style.width;
        // this.currentIndex = 0;
        this.carouselLength = this.carouselImages.length - 1;
        this.currentPosition = 0;

        //this.carouselImages[this.currentIndex].style.display='block';

        this.carouselImages.forEach((image, index) => {image.style.order = index;});
        this.carouselImages = Array.from(this.carouselImages).map(image => new CarouselImage(image));
        this.leftButton.addEventListener('click', () => this.click(this.leftButton));
        this.rightButton.addEventListener('click', () => this.click(this.rightButton));
}

click(button) {
    // this.lastIndex = this.currentIndex;

    if (button.classList.contains('left-button')) {
        // if (this.currentIndex === 0){
        //     this.currentIndex = this.carouselLength;
        // } else {
        //     this.currentIndex -= 1;
        // }

        // if(image.order === this.carouselLength) {
        //     image.order = 0;
        //     } else if (image.order === 0) {
        //     image.order = this.carouselLength
        //     } else {
        //     image.order -= 1;
        //     }
        //     image.image.style.order = image.order;
        
            TweenMax.to(this.imageContainer, .25, {left: "-2400px", onComplete: () => {
                this.carouselImages.forEach((image) => {
                     if (image.order === 0) {
                    image.order = this.carouselLength
                    } else {
                    image.order -= 1;
                    }
                    image.image.style.order = image.order;
                });
                this.imageContainer.style.left = "-1200px"
            }});


    } else if (button.classList.contains('right-button')) {
        // if (this.currentIndex === this.carouselLength) {
        //     this.currentIndex = 0;
        // } else {
        //     this.currentIndex += 1;
        // }
        TweenMax.to(this.imageContainer, .25, {left: "0px", onComplete: () => {
            this.carouselImages.forEach((image) => {
                 if (image.order === this.carouselLength) {
                image.order = 0;
                } else {
                image.order += 1;
                }
                image.image.style.order = image.order;
            });
            this.imageContainer.style.left = "-1200px"
        }});
    }

    // this.carouselImages.forEach(image => {console.log(image)});
    // this.carouselImages[this.currentIndex].style.display = 'block';
}
}

class CarouselImage {
    constructor(image) {
        this.image = image;
        this.order = Number(this.image.style.order);
    }
}

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun
*/

//References

let carousel = document.querySelector('.carousel');
carousel = new Carousel(carousel);





