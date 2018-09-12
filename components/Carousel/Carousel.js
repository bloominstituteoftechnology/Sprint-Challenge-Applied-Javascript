class Carousel {
    constructor(el) {
        this.el = el;
        this.left = document.querySelector('.left-button');
        this.left.addEventListener('click', () => {
            this.clkLeft();
        })
        this.right = document.querySelector('.right-button');
        this.right.addEventListener('click', () => {
            this.clkRight();
        })
        this.img = this.el.querySelectorAll('img');
        this.index = 0;
        this.currentIndex = this.img[this.index];


    }

    clkRight() {
        this.img.forEach((item => item.style.display = "none"));
        if (this.index < this.img.length - 1) {
            this.index++;
            this.currentIndex = this.img[this.index];
        } else {
            this.index = 0;
            this.currentIndex = this.img[this.index];
        }
        this.currentIndex.style.display = 'block'

    }
    clkLeft() {
        this.img.forEach((item => item.style.display = "none"));
        if (this.index === 0) {
            this.index = this.img.length - 1;
            this.currentIndex = this.img[this.index];
            console.log(this.index)
        } else {
            this.index--;
            this.currentIndex = this.img[this.index];
        }
        this.currentIndex.style.display = 'block';
    }

}

// class Imgs{
//     constructor(el){

//     }
// }

let carousel = document.querySelector('.carousel')
carousel = new Carousel(carousel);
carousel.currentIndex.style.display = 'block';

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/