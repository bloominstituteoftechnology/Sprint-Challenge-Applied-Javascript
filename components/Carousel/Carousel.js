class Carousel {
    constructor(element){
        this.element = element;
        this.pics = document.querySelectorAll('.cImg');

        this.left = this.element.firstElementChild;
        this.left.addEventListener('click', () => {
            this.goLeft(); console.log('left');
        });

        this.right = this.element.lastElementChild;
        this.right.addEventListener('click', () => {
            this.goRight(); console.log('right');
        })
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
            img.style.display = 'none';
        });
        this.pics[this.i].style.display = 'block';
    };

    goRight(){
        if (this.i === 3) {
            this.i = 0;
        }
        else {
            this.i++;
        }
        this.pics.forEach(img => {
            img.style.display = 'none';
        });
        this.pics[this.i].style.display = 'block';
    };
}

let carousel = document.querySelector('.carousel');
let imgCarousel = new Carousel(carousel);
imgCarousel.pics[imgCarousel.i].style.display = 'block';

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/