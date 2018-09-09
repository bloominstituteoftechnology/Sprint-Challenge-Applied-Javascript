class Carousel {
    constructor(element) {
        this.element = element;
        this.rightButton = document.querySelector('.right-button');
        this.leftButton = document.querySelector('.left-button');
        this.images = document.querySelectorAll('.carousel img');
        this.index = 0;
        this.rightButton.addEventListener('click', () => {
            this.displayImage('right');
        })
        this.leftButton.addEventListener('click', () => {
            this.displayImage('left');
        })
    }
    displayImage(direction) {
        this.images.forEach(element => element.style.display = 'none');
        if(direction === 'right') {        
            this.index + 1 > this.images.length -1 ? this.images[0].style.display = 'inline-block' :
            this.images[this.index + 1].style.display = 'inline-block';
            this.index + 1 > this.images.length -1 ? this.index = 0 : this.index++;
        }
        else {
            this.index - 1 < 0 ? this.images[this.images.length -1].style.display = 'inline-block' :
            this.images[this.index - 1].style.display = 'inline-block';
            this.index - 1 < 0 ? this.index = this.images.length -1 : this.index--;
        }
    }     
}

let carousel = document.querySelectorAll('.carousel');
carousel = carousel.forEach(element => new Carousel(element));
const img = document.querySelector('.carousel img');
img.style.display = 'inline-block';

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/