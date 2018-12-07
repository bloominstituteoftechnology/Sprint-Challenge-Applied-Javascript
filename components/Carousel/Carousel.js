class Carousel {
    constructor(CarouselElement) {
        this.CarouselElement = CarouselElement;
        this.lButton = this.CarouselElement.querySelector('.left-button');
        this.rButton = this.CarouselElement.querySelector('.right-button');
        this.imgs = this.CarouselElement.querySelectorAll('img');
        this.index = this.imgs[0];
        this.length = this.imgs.length;
        this.counter = 0;
        this.lButton.addEventListener('click', (e) => this.changeIndex(-1));
        this.rButton.addEventListener('click', (e) => this.changeIndex(1));
        console.log(this.lButton);
        console.log(this.rButton);
        console.log(this.imgs);
        console.log(this.index);
    }

    changeIndex(direction){ 
        this.index.classList.remove('current');
        this.counter = this.counter + direction;
        console.log(this.counter);
        if (direction === -1 && 
            this.counter < 0) { 
          this.counter = this.length - 1; 
        }
        if (direction === 1 && 
            !this.imgs[this.counter]) { 
          this.counter = 0;
        }
        this.index = this.imgs[this.counter];
        this.index.classList.add('current');
    }
}

let carousel = document.querySelectorAll('.carousel').forEach(car => new Carousel(car));
//let lButton = carousel.querySelector('.left-button');
// let rButton = carousel.querySelector('.right-button');

// let imgs = carousel.querySelectorAll('img');



/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/