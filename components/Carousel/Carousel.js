class Carousel {
    constructor(element) {
        this.element = element
        this.index = 0;
        this.carouselLeftButton = this.element.querySelector('.left-button');
        this.carouselRightButton = this.element.querySelector('.right-button');
        this.imgs = this.element.querySelectorAll('img');
        this.carouselLeftButton.addEventListener('click',(e) => this.moveCarousel(e))
        this.carouselRightButton.addEventListener('click',(e) => this.moveCarousel(e))
        this.imgs[this.index].style.display = "block";
    }
    moveCarousel(e){
        let mover = 1;
        e.target.getAttribute('class') == "left-button" ? mover = -1 : null;
        this.index = this.index + mover;
        if (this.index == -1 && e.target.getAttribute('class') == 'left-button') {
            this.index = this.imgs.length - 1;
        }
        if (this.index == this.imgs.length && e.target.getAttribute('class') == 'right-button') {
            this.index = 0;
        }
        this.imgs.forEach(img => {
            img.style.display = "none";
        })
        this.imgs[this.index].style.display = "block";
    }
}


new Carousel(document.querySelector('.carousel'));

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/