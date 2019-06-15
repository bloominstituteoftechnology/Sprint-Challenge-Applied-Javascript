class Carousel {
    constructor(carousel){
        this.carousel = carousel;
        this.images = Array.from(document.querySelectorAll('.carouselimg')).map(x => new CarouselImg(x));
        this.current = 0;
        this.currentImg = this.images[this.current];
        this.leftBtn = document.querySelector('.left-button');
        this.leftBtn.addEventListener('click', () => this.leftClick());
        this.rightBtn = document.querySelector('.right-button');
        this.rightBtn.addEventListener('click', () => this.rightBtn.rightClick());
    }

    leftClick() {

    }

    rightClick() {

    }

}

class CarouselImg{
    constructor(image) {
        this.image = image;
    }
    display() {
        return this.image.style.display = 'block';
    }
    hide(){
        return this.image.style.display = 'none';
    }

}

let carousel = document.querySelector('.carousel');
carousel = new Carousel(carousel);


/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
