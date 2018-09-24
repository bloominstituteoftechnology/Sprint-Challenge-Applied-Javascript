class Carousel {
    constructor(element) {
        // assign this.element to the element reference
        this.element = element;
        let leftbutton = document.querySelector('.left-button');
        this.leftbutton = leftbutton;
        let rightbutton = document.querySelector('.right-button');
        this.rightbutton = rightbutton;
        let carouselimages = document.querySelectorAll('.carousel img');
        this.carouselimages = carouselimages;
        let index = 0;
        this.index = index;
        this.leftbutton.addEventListener('click', (event) => {
            // Call the select method you define below
            this.CarouselClickLeft(event);
        });
        this.rightbutton.addEventListener('click', (event) => {
            // Call the select method you define below
            this.CarouselClickRight(event);
        });
    }
    CarouselClickLeft(event) {
        if (this.index > 0) {
            this.carouselimages[this.index].style.display = 'none';
            this.index = this.index - 1;
            this.carouselimages[this.index].style.display = 'flex';
        }
        else {
            this.carouselimages[this.index].style.display = 'flex';
        }

    }
    CarouselClickRight(event) {
        if (this.index < 3) {
            this.carouselimages[this.index].style.display = 'none';
            this.index = this.index + 1;
            this.carouselimages[this.index].style.display = 'flex';
        }
        else {
            this.carouselimages[this.index].style.display = 'flex';
        }
    }
}



let carousel = document.querySelectorAll('.carousel');

carousel = Array.from(carousel).map(link => new Carousel(link));

carousel[0].CarouselClickLeft();




/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

