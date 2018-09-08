class Carousel {
    constructor(element){
        this.element = element;
        this.images = this.element.querySelectorAll('img');
        this.leftButton = this.element.querySelector('.left-button');
        this.rightButton = this.element.querySelector('.right-button');
        this.imgIndex = 0;

        //add event listener to display correct image on click
        this.leftButton.addEventListener('click', () => { this.showImgLeft() });
        this.rightButton.addEventListener('click', () => { this.showImgRight() });
    }

    showImgLeft(){
        this.imgIndex = (this.imgIndex === 0) ? 3 : (this.imgIndex - 1);
        this.images.forEach(function(img){
            img.style.display = 'none';
        });
        this.images[this.imgIndex].style.display = 'block';
    }

    showImgRight(){
        this.imgIndex = (this.imgIndex === 3) ? 0 : (this.imgIndex + 1);
        this.images.forEach(function (img) {
            img.style.display = 'none';
        });
        this.images[this.imgIndex].style.display = 'block';
    }
}

//grab carousel container div
let carousel = document.querySelector('.carousel');
//create Carousel Object/component
carouselObj = new Carousel(carousel);
//display first image on startup
carouselObj.images[0].style.display = 'block';

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/