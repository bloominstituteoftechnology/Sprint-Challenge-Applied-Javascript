class Carousel {
    constructor(element) {
        // assign this.element to element ref
        this.element = element;
        // select all elements with class .right button
        this.rightButton = document.querySelector('.right-button').addEventListener('click', this.goRight(event));
        // select all elements with class .left buttin
        this.leftButton = document.querySelector('.left-button').addEventListener('click', this.goLeft.bind(event));
        // select all img in carousel class
        this.image = document.querySelectorAll('.carousel img')
        // create index
        this.index=0;
        this.image[0].classList.add('active');

    }
    
    moveLeft (){
        if(this.index > 0) {
            this.index-=1;
        } else {
            this.index=this.image.length-1;
        }
        this.image.forEach(image => image.classList.remove('img-active'));
        this.image[this.index].classList.add('img-active');
}

    moveRight() {

    }

}



// Reference to carousel
let carousel = document.querySelector('.carousel');
// Map over array and convert each carousel tab reference into a new  obj
carousel = Array.from(carousel).map(carousel => new Carousel(carousel));

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/