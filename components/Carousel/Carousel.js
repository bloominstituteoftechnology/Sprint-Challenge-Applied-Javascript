class Carousel {
    constructor(domElement) {
        this.element = domElement;

        this.leftBtn = document.querySelector('.left-button');
        this.rightBtn = document.querySelector('.right-button');

        this.images = document.querySelectorAll('.carousel img');

        this.currentIndex = 0;

        this.images[0].style.display = 'block';

        this.leftBtn.addEventListener('click', () => {
            this.images.forEach(image => image.style.display = 'none');

            this.currentIndex -= 1;

            if(this.currentIndex < 0) {
                this.currentIndex = 3;
            }

            this.images.forEach((image, index) => {
                if(this.currentIndex === index) {
                    image.style.display = 'block';
                    TweenMax.from(image, 1, {x:-1000});
                }
            })
        })
        
        this.rightBtn.addEventListener('click', () => {
            this.images.forEach(image => image.style.display = 'none');

            this.currentIndex += 1;

            if(this.currentIndex > 3) {
                this.currentIndex = 0;
            }

            this.images.forEach((image, index) => {
                if(this.currentIndex === index) {
                    image.style.display = 'block';
                    TweenMax.from(image, 1, {x:1000});
                }
            })
        })
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