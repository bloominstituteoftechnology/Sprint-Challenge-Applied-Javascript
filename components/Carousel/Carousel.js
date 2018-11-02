class Carousel {
    constructor(element) {
        // assign this.element to the element reference
        this.element = element;
        let leftbutton = document.querySelector('.left-button');
        this.leftbutton = leftbutton;
        let rightbutton = document.querySelector('.right-button');
        this.rightbutton = rightbutton;
        let carouselImgs = document.querySelectorAll('.carousel img');
        this.carouselImgs = carouselImgs;
        let index = 0;
        this.index = index;
        this.leftbutton.addEventListener('click', (event) => {
            // Call the select method you define below
            this.CarouselScrollLeft(event);
        });
        this.rightbutton.addEventListener('click', (event) => {
            // Call the select method you define below
            this.CarouselScrollRight(event);
        });
    }
    CarouselScrollLeft(event) {
        if (this.index > 0) {
            this.carouselImgs[this.index].style.display = 'none';
            //decrement through index
            this.index = this.index - 1;
            this.carouselImgs[this.index].style.display = 'flex';
        }
        else {
            this.carouselImgs[this.index].style.display = 'flex';
        }

    }
    CarouselScrollRight(event) {
        if (this.index < 3) {
            this.carouselImgs[this.index].style.display = 'none';
            //increment through index
            this.index = this.index + 1;
            this.carouselImgs[this.index].style.display = 'flex';
        }
        else {
            this.carouselImgs[this.index].style.display = 'flex';
        }
    }
}



let carousel = document.querySelectorAll('.carousel');

carousel = Array.from(carousel).map(link => new Carousel(link));

carousel[0].CarouselScrollLeft();





/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the Img
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/