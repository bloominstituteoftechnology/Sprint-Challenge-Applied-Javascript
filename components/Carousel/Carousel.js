class Carousel {
    constructor(element) {
        this.element = element;
        this.leftButton = this.element.querySelector('.left-button');
        this.rightButton = this.element.querySelector('.right-button');
        this.images = this.element.querySelectorAll('.carousel img');
        this.counter = 0;
        this.amount = this.images.length;
        this.current = this.images[0];
        this.current.style.display = 'block';
    
        this.rightButton.addEventListener('click', () => {
            const direction = 1;
            //this.current.style.opacity = '0';
            this.current.style.display = 'none';
           // this.current.style.transform = 'scale(0)';
           // this.current.style.transition = '1s';
            this.counter = this.counter + direction;
            if (!this.images[this.counter]) {
                this.counter = 0;
            }
            this.current = this.images[this.counter];
            //this.current.style.opacity = '0';
            this.current.style.display = 'block';
            //this.current.style.opacity = 1;
            //this.current.style.transform = 'scale(1)';
            //this.current.style.transition = '1s';

        });
    
        this.leftButton.addEventListener('click', () => {
            const direction = -1;
            this.current.style.display = 'none';
            this.counter = this.counter + direction;
            if (direction === -1 && this.counter < 0) {
                this.counter = this.amount - 1;
            }
            this.current = this.images[this.counter];
            this.current.style.display = 'block';
        });
    } 
}

let carousel = document.querySelector('.carousel');
carousel = new Carousel(carousel);

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/