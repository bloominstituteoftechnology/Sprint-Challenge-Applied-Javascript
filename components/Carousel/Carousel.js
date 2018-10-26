class Carousel {
    constructor(element) {
        this.element = element; 
        this.imgData = this.element.dataset.img;
        this.currentIdx = this.imgData - 1;
        this.backBtn = document.querySelector('.left-button'); 
        this.nextBtn = document.querySelector('.right-button'); 
        this.nextBtn.addEventListener('click', () => this.nextImg());
        this.backBtn.addEventListener('click', () => this.previousImg());
    }
    nextImg() {
        let carousel = document.querySelectorAll('.carousel img');
        this.image = carousel[this.currentIdx];
        this.nextImg = carousel[this.currentIdx + 1];
        if (this.currentIdx != carousel.length - 1) {
            this.image.style.display = 'none'
            this.nextImg.style.display = 'flex';
        }
    }
    previousImg() {
        let carousel = document.querySelectorAll('.carousel img');
        this.image = carousel[this.currentIdx];
        this.prevImg = carousel[this.currentIdx - 1];
        if (this.currentIdx != 0) {
            this.image.style.display = 'none'
            this.prevImg.style.display = 'flex';
        }      
    }
}


let carousel = document.querySelectorAll('.carousel img');
carousel[0].style.display = 'flex';
carousel = Array.from(carousel).map( img => new Carousel(img) );


/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/