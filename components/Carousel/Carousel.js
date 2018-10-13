class Carousel {
    constructor(domElement) {
        this.domElement = domElement;
        this.image = domElement.querySelectorAll('.img');
        this.leftButton = domElement.querySelector('.left-button');
        this.rightButton = domElement.querySelector('.right-buttton');

        this.currentIndex = 0;
        this.image(this.currentIndex);

        this.leftButton.addEventListener('click', () => {
            this.selectImage();
        });
        this.rightButton.addEventListener('click', () => {
            this.selectImage();
        });
        
    }

    selectImage() {
        const image = document.querySelectorAll('.img');

        image.forEach(img => {
            img.classList.add('active');
          })
    }
}

let carousel = document.querySelector('.carousel');
carousel - Array.from(carousel).map(domElement => {
    return new Carousel(domElement);
})
/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/