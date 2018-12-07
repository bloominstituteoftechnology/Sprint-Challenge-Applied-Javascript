class Carousel {
    constructor(element, left) {
        this.element = element;
        this.left = left;

        this.element.addEventListener('click', () => this);
    }
    


};

let carousel = document.querySelector('.carosel');
let left = document.querySelector('.carosel .left-button');
let right = document.querySelector('.carosel .right-button');

//Image ref
let imgRef = document.querySelectorAll('.carosel img');

//Array index of images
let images = Array.from(imgRef).map((image => {return image.src})


/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/