class Carousel {
    constructor(element) {

        this.element = element; // div.class=carousel
                //console.log(this.element);

        this.buttonLeft = this.element.querySelector('.left-button'); // div.class=left-button
                //console.log(this.buttonLeft);

        this.buttonRight = this.element.querySelector('.right-button');// div.class=right-button
                //console.log(this.buttonRight);

        this.images = this.element.querySelectorAll('.carousel img');// Node list of images
                console.log(this.images);
        this.images = Array.from(this.images); // Turns image node list to array
                console.log(this.images);
                // this.image1 = this.images[0];
                // this.image2 = this.images[1];
                // this.image3 = this.images[2];
                // this.image4 = this.images[3];
        this.buttonLeft.addEventListener('click', () => {
                    //console.log('Left Button was clicked');
            this.showImage();
        });

        this.buttonRight.addEventListener('click', () => {
                    //console.log('Right Button was clicked');
            this.showImage();
        });
    }

    showImage() {
        if(i < this.images.length - 1) {
            i++;
        }   else {
            i = 0;
        }

        setTimeout('showImage()', time);
    }
}
var i = 0;
var time = 3000;
let carousel = document.querySelector('.carousel');
        // console.log(carousel);
carousel = new Carousel(carousel);
        // console.log(carousel);

window.onload = 



/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/