class Carousel {
    constructor(element){
        this.element = element;
        this.leftButton = this.element.querySelector('.left-button');
        this.rightButton = this.element.querySelector('.right-button');
        this.images = this.element.querySelectorAll('img');
        this.currentIndex = 0;
        this.selectedImage = this.images[this.currentIndex];
        this.leftButton.addEventListener('click', () => {this.selectImage(this.leftButton)});
        this.rightButton.addEventListener('click', () => {this.selectImage(this.rightButton)});
        this.showImage();
    }
    showImage() {
        this.images.forEach(image => {
            image.style.display = null;
        });
        this.selectedImage.style.display='block';
    }
    selectImage(button) {
        // if the button is the left button we're going down the index
        if (button === this.leftButton) {
            // if we've reached -1 we need to loop to the end of the images and display that one
            if (this.currentIndex <= 0){
                this.currentIndex = this.images.length - 1;
            }
            else {
                // Otherwise just reduce which index we're showing
                this.currentIndex--;
            }
        }
        if (button === this.rightButton) {
            // We're going up in the index so if we've reached the end of the images we need to loop to the beginning
            if (this.currentIndex >= this.images.length-1) {
                this.currentIndex = 0;
            }
            else {
                // Otherwise just increment the index we're showing
                this.currentIndex++;
            }
        }
        this.selectedImage = this.images[this.currentIndex];
        this.showImage();
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