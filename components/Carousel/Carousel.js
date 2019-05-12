class Carousel {
    constructor(carousel) {
        // 1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
        this.carousel = carousel;
        this.leftButton = this.carousel.querySelector('.left-button');
        this.rightButton = this.carousel.querySelector('.right-button');

        // 2. You will need to grab a reference to all of the images
        this.imgs = this.carousel.querySelectorAll('img');

        // 3. Create a current index
        this.index = 0;

        this.imgs[this.index].style.display = 'block';

        // 4. Those buttons are gonna need some click handlers.
        this.leftButton.addEventListener('click', () => this.moveLeft());
        this.rightButton.addEventListener('click', () => this.moveRight());
}};


moveRight() {
    // initially displaying none
    this.imgs[this.index].style.display = 'none';
    // iterate over the images, if this.index is less than the length of the nodelist, then set index to 0, otherwise iterate AND set the image at that index to display inline-block
    if(this.index === this.imgs.length-1) {
        this.index = 0;
    } else {
        this.index++;
        this.imgs[this.index].style.display = 'block';
    }
};

moveLeft() {
    // initially displaying none
    this.imgs[this.index].style.display = 'none';
    // iterate over the images, if this.index is less than the length of the nodelist, then set index to 0, otherwise iterate AND set the image at that index to display inline-block
    if(this.index === this.imgs.length-1) {
        this.index = 0;
    } else {
        this.index++;
        this.imgs[this.index].style.display = 'block';
    }
};

const carousels = document.querySelector('.carousel');

carousels.forEach(carousel => new Carousel(carousel));


// let carousel = document.querySelector('.carousel');
// let leftButton = document.querySelector('.left-button');
// let rightButton = document.querySelector('.right-button');
// let imgs = document.querySelectorAll('img');

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    
    
    
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

// .carousel
// .left-button
// .right-button
// img
{/* <div class="carousel">
    <div class="left-button"><</div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button">></div>
  </div> */}