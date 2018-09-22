class Carousel {
    constructor(element) {
        this.element = element;
                // console.log(this.element);
        this.leftButton = this.element.querySelector('.left-button');
                // console.log(this.leftButton);
        this.rightButton = this.element.querySelector('.right-button');
                // console.log('this.rightButton', this.rightButton);
        this.image = this.element.querySelectorAll('.carousel img');
                // console.log('this.image', this.image);
        this.image = Array.from(this.image);
        this.image[0].style.display = 'block';
                // console.log('this.image', this.image);
        this.rightButton.addEventListener('click', () => {
                this.showImage();
        });
        this.leftButton.addEventListener('click', () => this.prevImage());
        this.index = 0;
    }

    showImage() {
        TweenMax.to('.carousel img', .5, {});
        if(this.index === 3) {
                this.index = -1;
        }

        this.index++;
        this.image.forEach(item => item.style.display = 'none');
        this.image[this.index].style.display = 'block';
   }
   prevImage() {
        if(this.index === 0) {
                this.index = 4;
        }

        this.index--;
        this.image.forEach(item => item.style.display = 'none');
        this.image[this.index].style.display = 'block';
   }
}
let carousel = document.querySelector('.carousel');
               // console.log(carousel);
carousel = new Carousel(carousel);
                // console.log(carousel);
/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/