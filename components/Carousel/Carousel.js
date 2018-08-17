class Carousel {
    constructor(element) {
        this.element = element;

        //reference to buttons left and right

        this.rightButton = document.querySelector('.right-button');
        this.lefttButton = document.querySelector('.left-button');

        // reference to all images
        this.allImages = document.querySelectorAll('.carousel-img');
        
        // 1 --> 4
        this.imgData = this.allImages.dataset.img;

        // current index of image
        this.currentImage = document.querySelectorAll(`.carousel-img[data-tab="${this.imgData}"]`);
        
        // click events
        this.rightButton.addEventListener('click', () => this.selectArrow());

        this.lefttButton.addEventListener('click', () => this.selectArrow());
    }

    selectArrow() {
        const everyImage = document.querySelectorAll('img');

        everyImage.forEach(item => item.classList.remove('img-hide'));

        this.lefttButton.classList.add('img');
        this.rightButton.classList.add('img');
    }
}    

      

let carousel = document.querySelector('.carousel');

carousel = new Carousel(carousel);


/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons --> Done
    2. You will need to grab a reference to all of the images --> Done
    3. Create a current index --> Done
    4. Those buttons are gonna need some click handlers. -->
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/