class Carousel {
    constructor(element){
        this.element = element;
        this.arrowLeft = document.querySelector('.left-button');
        this.arrowRight = document.querySelector('.right-button');
        this.images = Array.from(element.querySelectorAll('img'));
        this.index = 0;
        this.images[this.index].style.display = 'block';
        this.images[this.index].style.zIndex = '-1';
        this.arrowLeft.addEventListener('click', () => this.moveLeft());
        this.arrowRight.addEventListener('click', () => this.moveRight());

    }
    moveLeft(){
        if (this.index === 0) {
            this.images[this.index].style.display = 'none';
            this.index = this.images.length-1;
            this.images[this.index].style.display = 'block';
        } else {
            this.images[this.index].style.display = 'none';
            this.index --;
            this.images[this.index].style.display = 'block';
        }
    }
    moveRight(){
        if (this.index === this.images.length-1) {
            this.images[this.index].style.display = 'none';
            this.index = 0;
            this.images[this.index].style.display = 'block';
        } else {
            this.images[this.index].style.display = 'none';
            this.index ++;
            this.images[this.index].style.display = 'block';
        }
    }


}

let carousel = new Carousel(document.querySelector('.carousel'));
console.log(carousel);

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/*
Move Left
if on first image
hide current image
go from last image to first image
show current image

else
hide current image
go to previous image
show current image

Move Right
if on last image
hide current image
go from first image to last image
show current image

else
hide current image
go to next image
show current image
*/
