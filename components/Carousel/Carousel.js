class Carousel {
    constructor(carousel) {
        this.carousel = carousel;
        this.leftButton = this.carousel.querySelector('.left-button');
        this.rightButton = this.carousel.querySelector('.right-button');
        this.img = this.carousel.querySelectorAll('img');
        this.currentImg = this.img[0];
        this.currentImgIndex = 0;
        this.currentImg.style.display = 'flex';
        this.leftButton.addEventListener('click', () => this.previous());
        this.rightButton.addEventListener('click', () => this.next());
    }

    next() {
        let exitImg = this.currentImg;
        let nextImg = undefined;
        let nextImgIndex = this.currentImgIndex + 1;
        if (this.img[nextImgIndex] !== undefined) {
            this.currentImgIndex = nextImgIndex;
            nextImg = this.img[nextImgIndex];
            this.img.forEach(i => i.style.diplay = 'none');
            this.currentImg = nextImg;
            this.currentImg.style.display = 'flex';
        } else {
            this.currentImgIndex = 0;
            nextImg = this.img[0];
            this.img.forEach(i => i.style.display = 'none');
            this.currentImg = nextImg;
            this.currentImg.style.display = 'flex';
        }
    }
    previous() {
        let exitImg = this.currentImg;
        let lastImg = undefined;
        let lastImgIndex = this.currentImgIndex - 1;
        if (this.img[lastImgIndex] !== undefined) {
            this.currentImg = lastImgIndex;
            lastImg = this.img[lastImgIndex];
            this.img.forEach(i => i.style.display = 'none');
            this.currentImg = lastImg;
            this.currentImg.style.display = 'flex';
        } else {
            this.currentImgIndex = this.img.length - 1;
            lastImg = this.img[this.img.length - 1];
            this.img.forEach(i => i.style.display = 'none');
            this.currentImg = lastImg;
            this.currentImg.style.display = 'flex';
        }
    }
}

let carousel = document.querySelectorAll('.carousel').forEach(img => new Carousel(img));

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/