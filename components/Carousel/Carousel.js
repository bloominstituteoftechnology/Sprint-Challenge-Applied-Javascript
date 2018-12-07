class Carousel {
    constructor(element){
        this.element = element;
        this.leftButton = this.element.querySelector('.left-button');
        this.rightButton = this.element.querySelector('.right-button')
        this.images = this.element.querySelectorAll('img');
        this.currentIndex = this.images[0];

        this.leftButton.addEventListener('click', () => {
            this.left();
        })

        this.rightButton.addEventListener('click', () => {
            this.right();
        })

        this.currentIndex.style.display = 'block';
        this.index = 0;
        setInterval(()=> this.right(), 4000);
    }

    left(){
        this.images.forEach(image => image.style.display = 'none');
        if (this.index > 0){
            this.images[this.index].style.display = 'block';
            this.index -= 1;
        } else {
            this.images[this.images.length - 1].style.display = 'block';
            this.index = this.images.length - 1;
        }
    }

    right(){
        this.images.forEach(image => image.style.display = 'none');
        if (this.index < this.images.length){
            this.images[this.index].style.display = 'block';
            this.index += 1;
        } else {
            this.images[0].style.display = 'block';
            this.index = 0;
        }
    }
}
let carousel = document.querySelector('.carousel');
 new Carousel(carousel);

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/