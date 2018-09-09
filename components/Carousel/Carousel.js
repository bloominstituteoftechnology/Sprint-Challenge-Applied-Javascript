class Carousel {
    constructor(e) {
        this.e = e;
        this.directionData = this.e.dataset.direction;
        this.carouselImg = document.querySelectorAll('.carousel > img');
        this.carouselImgDisplayNone = Array.from(this.carouselImg).forEach(img => img.style.display = 'none');
        this.carouselImg[0].style.display = null;
        this.newCarouselImg = Array.from(this.carouselImg).map(img => new this.carouselImg(img));
        
    }
    currentImg() {
        const img = document.querySelectorAll('.carousel > img');
        Array.from(img).forEach(img => img.style.display = 'none');
        this.img.forEach(img => img.showImage());
    }
}

class CarouselImage {
    constructor(e) {
        this.e = e;
    }
    showImage() {
        this.e.style.display = null;
    }
}

let carousel = document.querySelectorAll('.carousel > div');

carousel = Array.from(carousel).map(button => new Carousel(button));



/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/