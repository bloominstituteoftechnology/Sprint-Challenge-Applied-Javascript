class Carousel {
    constructor(element) {
        this.element = element;
        this.leftButton = element.querySelector('.left-button');
        this.rightButton = element.querySelector('.right-button');
        this.images = this.element.querySelectorAll('img');
        this.currentIndex = 0;
        this.images[this.currentIndex].style.display = 'block';

        this.leftButton.addEventListener('click', () => {
            this.lastImg();
        })

        this.rightButton.addEventListener('click', () => {
                this.nextImg();
        })
    }
    

    lastImg() {
        if ((this.currentIndex - 1) < 0) {
            this.currentIndex = this.images.length - 1;
        } else {
            this.currentIndex -= 1;
        }
        this.images.forEach(function (each) {
            each.style.display = 'none';
        })
        this.images[this.currentIndex].style.display = 'block';
    }


    nextImg() {
            if ((this.currentIndex + 1) > this.images.length - 1) {
                this.currentIndex = 0;
            } else {
                this.currentIndex += 1;
            }
        this.images.forEach(function (each) {
            each.style.display = 'none';
        })
        this.images[this.currentIndex].style.display = 'block';
    }
}


let carousel = document.querySelectorAll('.carousel');

carousel = Array.from(carousel).map(carousel => new Carousel(carousel));

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/