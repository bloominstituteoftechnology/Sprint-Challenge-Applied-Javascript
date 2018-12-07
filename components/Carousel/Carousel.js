let current = 0;

class Carousel {
    constructor(carouselElement){
        this.carouselElement = carouselElement;
        this.leftArrow = this.carouselElement.querySelector('.left-button');
        this.rightArrow = this.carouselElement.querySelector('.right-button');
        this.slides = this.carouselElement.querySelectorAll('img');
        this.slides[0].style.display = 'block';
        this.slides[0].style.right = '-600px';
        this.slides[1].style.display = 'block';
        this.slides[1].style.right = '-600px';

        this.rightArrow.addEventListener('click', _ => this.slideRight());
        this.leftArrow.addEventListener('click', _ => this.slideLeft());
    }

    slideRight() {
        this.slides[current].style.transition = 'right 1s ease';

        this.slides[current].addEventListener('transitionend', _ => {
            if (current > 0) {
                this.slides[current - 1].style.display = 'none';
                this.slides[current - 1].style.order = '0';
            } else {
                this.slides[this.slides.length - 1].style.display = 'none';
                this.slides[this.slides.length - 1].style.order = '0';
            }

            this.slides[current].style.transition = 'none';
            if (current < this.slides.length - 1) {
                this.slides[current].style.right = `-600px`;
                this.slides[current].style.order = `-1`;
                this.slides[current + 1].style.right = '-600px';
                this.slides[current + 1].style.display = 'block';
            } else {
                this.slides[current].style.right = `-600px`;
                this.slides[current].style.order = `-1`;
                this.slides[0].style.right = `-600px`;
                this.slides[0].style.display = `block`;
            }

        });
        if (current < this.slides.length - 1) {
            this.slides[current].style.right = `600px`;
            this.slides[current + 1].style.right = `600px`;
            current++;
        } else {
            this.slides[current].style.right = `600px`;
            this.slides[0].style.right = `600px`;
            current = 0;
        }
    }

    slideLeft() {
    //     this.slides[current].style.transition = 'right 1s ease';

    //     this.slides[current].addEventListener('transitionend', _ => {
    //         if (current > 0) {
    //             this.slides[current - 1].style.display = 'none';
    //             this.slides[current - 1].style.order = '-1';
    //         } else {
    //             this.slides[this.slides.length - 1].style.display = 'none';
    //             this.slides[this.slides.length - 1].style.order = '-1';
    //         }

    //         this.slides[current].style.transition = 'none';
    //         if (current > 0) {
    //             this.slides[current].style.right = `1800px`;
    //             this.slides[current].style.order = `0`;
    //             this.slides[current - 1].style.right = '-1800px';
    //             this.slides[current - 1].style.display = 'block';
    //         } else {
    //             this.slides[current].style.right = `-1800px`;
    //             this.slides[current].style.order = `-1`;
    //             this.slides[0].style.right = `-1200px`;
    //             this.slides[0].style.display = `block`;
    //         }

    //     });
    //     if (current > 0) {
    //         this.slides[current].style.right = `-1800px`;
    //         this.slides[current - 1].style.right = `-1800px`;
    //         current--;
    //     } else {
    //         this.slides[current].style.right = `-1800px`;
    //         this.slides[0].style.right = `-1800px`;
    //         current = 0;
    //     }
    }
}

let carousel = new Carousel(document.querySelector('.carousel'));

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/