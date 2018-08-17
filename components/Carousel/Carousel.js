class Carousel {
    constructor(carousel) {
        this.carousel = carousel;
        this.leftButton = carousel.querySelector('.left-button');
        this.rightButton = carousel.querySelector('.right-button');
        this.carouselImages = document.querySelectorAll('.carousel img');

        this.currentIndex = 0;
        this.carouselLength = this.carouselImages.length - 1;

        this.carouselImages[this.currentIndex].style.display='block';

        this.leftButton.addEventListener('click', () => this.click(this.leftButton));
        this.rightButton.addEventListener('click', () => this.click(this.rightButton));
}

click(button) {
    if (button.classList.contains('.left-button')) {
        if (this.currentIndex === 0){
            this.currentIndex = this.carouselLength;
        } else {
            this.currentIndex -= 1;
        }
    } else {
        if (this.currentIndex === this.carouselLength) {
            this.currentIndex = 0;
        } else {
            this.currentIndex += 1;
        }
    }

    this.carouselImages.forEach(image => image.style.display='none');
    this.carouselImages[this.currentIndex].style.display = 'block';
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





