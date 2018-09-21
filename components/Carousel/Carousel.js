class Carousel {
    constructor(element) {
        this.element = element;
        this.leftButton = this.element.querySelector('.left-button');
        this.rightButton = this.element.querySelector('.right-button');

        this.images = this.element.querySelectorAll('img');
        // this.images = Array.from(this.images).map(n => new CarouselImage(n));

        this.hideAll();
        this.images[0].style.display = null;
        this.imageIndex = 0;

        this.leftButton.addEventListener('click', e => this.shiftLeft(e));
        this.rightButton.addEventListener('click', e => this.shiftRight(e));

    }

    shiftLeft() {
        const preIndex = this.imageIndex;
        this.imageIndex -= 1;
        if (this.imageIndex < 0) { this.imageIndex = this.images.length - 1}

        const preImg = this.images[preIndex];
        const img = this.images[this.imageIndex];
        const transition = 'all 600ms ease-in-out';

        preImg.style.transition = transition;
        preImg.style.transform = 'translateX(100%)';
        
        img.style.transform = 'translateX(-100%)';
        img.style.transition = transition;
        img.style.display = null;

        setTimeout(() => {
            img.style.transform = 'translateX(0%)';
            img.style.zIndex = -1;
        },0)

        setTimeout(() => {
            this.hideAll();
            img.style.display = null;
            // img.style.transform = 'translateX(0px)';
        }, 600);

        
    }

    shiftRight() {
        const preIndex = this.imageIndex;
        this.imageIndex += 1;
        if (this.imageIndex >= this.images.length) { this.imageIndex = 0 }
        // this.hideAll();
        // const image = this.images[this.imageIndex];
        // image.style.display = null;

        const preImg = this.images[preIndex];
        const img = this.images[this.imageIndex];
        const transition = 'all 600ms ease-in-out';

        preImg.style.transition = transition;
        preImg.style.transform = 'translateX(-100%)';
        
        img.style.transform = 'translateX(100%)';
        img.style.transition = transition;
        img.style.display = null;

        setTimeout(() => {
            img.style.transform = 'translateX(0%)';
            img.style.zIndex = -1;
        },0)

        setTimeout(() => {
            this.hideAll();
            img.style.display = null;
            // img.style.transform = 'translateX(0px)';
        }, 600);
    }

    hideAll() {
        this.images.forEach(n => {
            n.style.display = 'none';
            n.style.transform = 'translateX(0%)';
            n.style.zIndex = -1;
            n.style.transition = 'none';
        });
    }

}

let carousel = document.querySelector('.carousel');

carousel = new Carousel(carousel)

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/