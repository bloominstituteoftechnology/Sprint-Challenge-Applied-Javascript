class Carousel {
    constructor(element) {
        this.element = element;
        this.leftButton = element.querySelector('.left-button');
        this.rightButton = element.querySelector('.right-button');
        this.currentImage = 0;
        this.image = element.querySelectorAll('img')[this.currentImage];
        this.image.style.display = 'block';
        this.rightButton.addEventListener('click', () => {this.nextImage()});
        this.leftButton.addEventListener('click', () => {this.prevImage()});
    }

    nextImage() {
        if (this.currentImage < Array.from(document.querySelectorAll('.carousel img')).length - 1) {
            this.currentImage++;
            let images = document.querySelectorAll('.carousel img');
            images.forEach(item => {item.style.display = 'none'});
            let displayImage = document.querySelectorAll('.carousel img')[this.currentImage];
            displayImage.style.display = 'block';
        }
    }

    prevImage() {
        if (this.currentImage > 0) {
            this.currentImage--;
            let images = document.querySelectorAll('.carousel img');
            images.forEach(item => {item.style.display = 'none'});
            let displayImage = document.querySelectorAll('.carousel img')[this.currentImage];
            displayImage.style.display = 'block';
        }
    }

}

let carousel = document.querySelector('.carousel');
carousel = new Carousel(carousel);

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/