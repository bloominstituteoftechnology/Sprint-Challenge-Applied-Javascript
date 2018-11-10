class Carousel {
    constructor(carousel){
        this.carousel = carousel;
        this.images = this.carousel.querySelectorAll('img');
        this.leftButton = this.carousel.querySelector('.left-button');
        this.rightButton = this.carousel.querySelector('.right-button');
        this.currentIndex = 0;
        this.leftButton.addEventListener('click', this.leftButtonFunc.bind(this));
        this.rightButton.addEventListener('click', this.rightButtonFunc.bind(this));
        this.images[0].style.display = 'block';
    }
    updateImage(){
        this.images.forEach(x => x.style.display = 'none');
        this.images[this.currentIndex].style.display = 'block';
    }
    leftButtonFunc(){
        if (this.currentIndex === 0) this.currentIndex = this.images.length-1;
        else this.currentIndex--;
        this.updateImage();
    }
    rightButtonFunc(){
        if (this.currentIndex === this.images.length-1) this.currentIndex = 0;
        else this.currentIndex++;
        this.updateImage();
    }
}

let carousel = document.querySelector('.carousel');
new Carousel(carousel);

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/