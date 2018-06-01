class Carousel {
    constructor(element){
        this.element = element;
        this.leftButton = this.element.querySelector('.left-button');
        this.rightButton = this.element.querySelector('.right-button');
        this.slides = this.element.querySelectorAll('.slide');
        this.slides = Array.from(this.slides);
        console.log(this.slides);
        this.activeSlideIndex = 0;
        this.activeSlide = this.slides[this.activeSlideIndex];
        this.rightButton.addEventListener('click', () => this.moveRight());
        this.leftButton.addEventListener('click', () => this.moveLeft());
    }

    moveRight() {
        this.activeSlide.classList.remove('active-slide');
        this.activeSlideIndex++;
        if(this.activeSlideIndex == 4)
            this.activeSlideIndex = 0;
        this.activeSlide = this.slides[this.activeSlideIndex];
        this.activeSlide.classList.add('active-slide');
    }

    moveLeft() {
        this.activeSlide.classList.remove('active-slide');
        this.activeSlideIndex--;
        if(this.activeSlideIndex == -1)
            this.activeSlideIndex = 3;
        this.activeSlide = this.slides[this.activeSlideIndex];
        this.activeSlide.classList.add('active-slide');
    }

}

// class Slides {
//     constructor(element, parent){
//         this.element = element;
//         this.parent = parent;
//     }
// }

let carousel = document.querySelector('.carousel');
carousel = new Carousel(carousel);

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. Those buttons are gonna need some click handlers.
    3. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    4. Have fun!
*/