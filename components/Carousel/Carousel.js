class Carousel {
    constructor(element) {
        this.element = element;
        this.buttonLeft = document.querySelector('.left-button');
        this.buttonRight = document.querySelector('.right-button');
        this.buttonLeft.addEventListener('click', () => this.leftShowImage())
        this.buttonRight.addEventListener('click', () => this.rightShowImage())
        this.images = Array.from(this.element.querySelectorAll('img'));
        this.currentIndex = 0;
        this.rightShowImage();
    }

    leftShowImage() {
        this.currentIndex === 0 ? this.currentIndex = 3 : this.currentIndex -= 1;
        this.images.forEach(img => {
            img.classList.remove('img-display');
            img.classList.add('img-none');
        })
        this.images[this.currentIndex].classList.remove('img-none');
        this.images[this.currentIndex].classList.add('img-display');
        TweenMax.from('.img-none', 0, { opacity: 0 });
        TweenMax.to('.img-display', 0.2, { opacity: 1 });
    }
    rightShowImage() {
        this.currentIndex === 3 ? this.currentIndex = 0 : this.currentIndex += 1;
        this.images.forEach(img => {
            img.classList.remove('img-display');
            img.classList.add('img-none');
        })
        this.images[this.currentIndex].classList.remove('img-none');
        this.images[this.currentIndex].classList.add('img-display');
        TweenMax.from('.img-none', 0, { opacity: 0 });
        TweenMax.to('.img-display', 0.2, { opacity: 1 });
    }
}


let carousel = document.querySelector('.carousel');
// console.log(carousel);
carousel = new Carousel(carousel);
/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

