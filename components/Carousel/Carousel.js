class Carousel {
 constructor(carousel) {
    this.carousel = carousel;
    this.leftButton = document.querySelector('.left-button')
    this.rightButton = document.querySelector('.right-button')
    this.images = document.querySelectorAll('.carousel img')
    console.log(this.images[0]);
    this.currentIndex = 0;
    if (this.currentIndex < 0) {
        this.currentIndex = 2;
    }
    if (this.currentIndex > 2) {
        this.currentIndex = 0;
    }
    this.currentImage = this.images[this.currentIndex];
    this.currentImage.style.display = 'block';
    this.leftButton.addEventListener('click', () => this.previousImage());
    this.rightButton.addEventListener('click', () => this.nextImage());
 }
 // METHODS
 previousImage() {
    console.log('Previous works!');
 }
 nextImage() {
    console.log('Next works!');
 }
}

let carousel = document.querySelectorAll('.carousel').forEach(carousel => new Carousel(carousel));
console.log(carousel);

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/