


class Carousel {
    constructor(carousel){
        this.carousel = carousel;
        this.btnData = this.carousel.dataset.btn;
        this.imgData = this.carousel.dataset.pos;
        console.log(this.btnData)
        console.log(this.imgData);
        //grabs the img attached to carousel
        this.img = document.querySelectorAll('.carousel img');
        //grabs the buttons attached to carousel
        this.btn = document.querySelectorAll
        
    }
    //Methods

}

let carousel = document.querySelector('.carousel')
carousel = new Carousel(carousel);


/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/