class Carousel {
    constructor(carousel) {
        this.currentIndex = 0;
        this.carousel = carousel;
        this.imgs = Array.from(this.carousel.querySelectorAll('img'));
		this.leftButton = document.querySelector('.left-button');
        this.rightButton = document.querySelector('.right-button');
        this.leftButton.addEventListener('click', () => this.shiftLeft());
		this.rightButton.addEventListener('click', () => this.shiftRight());
    }
    
    shiftLeft() {
		this.currentIndex === 0 ? (this.currentIndex = 3) : (this.currentIndex -= 1);
		this.imgs.forEach(img => img.classList.replace('img-show', 'img-null'));
		this.imgs[this.currentIndex].classList.replace('img-null', 'img-show');
    }
    
    shiftRight() {
		this.currentIndex === 3 ? (this.currentIndex = 0) : (this.currentIndex += 1);
		this.imgs.forEach(img => img.classList.replace('img-show', 'img-null'));
		this.imgs[this.currentIndex].classList.replace('img-null', 'img-show');
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