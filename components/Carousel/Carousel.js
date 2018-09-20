class Carousel {
    constructor(element){
        this.element = element;
        this.pics = document.querySelectorAll('.cImg');

        this.left = this.element.firstElementChild;
        this.left.addEventListener('click', () => {this.goLeft()});

        this.right = this.element.lastElementChild;
        this.right.addEventListener('click', () => {this.goRight()})
        this.i = 0;
    }

    goLeft(){
        if (this.i === 0) {
            this.i = 3;
        }
        else {
            this.i--;
        }
        this.pics.forEach(img => {
            img.style.visibility = 'hidden';
            img.style.right = '-2000px'
            img.style.left = '0px'
        });
        this.pics[this.i].style.visibility = 'visible';
        this.pics[this.i].style.right = '0px';
        this.pics[this.i].style.transition = 'right 1s';
    };

    goRight(){
        if (this.i === 3) {
            this.i = 0;
        }
        else {
            this.i++;
        }
        this.pics.forEach(img => {
            img.style.visibility = 'hidden';
            img.style.left = '-2000px'
            img.style.right = '0px'
        });
        this.pics[this.i].style.visibility = 'visible';
        this.pics[this.i].style.left = '0px';
        this.pics[this.i].style.transition = 'left 1s';
    };
}

let carousel = document.querySelector('.carousel');
let imgCarousel = new Carousel(carousel);
imgCarousel.pics[0].style.visibility = 'visible';
imgCarousel.pics[1].style.visibility = 'hidden';
imgCarousel.pics[2].style.visibility = 'hidden';
imgCarousel.pics[3].style.visibility = 'hidden';

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/