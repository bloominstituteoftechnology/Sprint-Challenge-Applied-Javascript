class Carousel {
    constructor(element) {
        this.element = element;
        console.log(this.elemet)
        this.carousel = document.querySelector('.carousel')
        this.leftBtn = document.querySelector('.left-button')
        this.rightBtn = document.querySelector('.right-button')
        console.log(this.rightBtn)
        this.images = document.querySelectorAll('.carousel .img')
        console.log(this.images)

    }
}

let carousel = document.querySelectorAll('.carousel');
console.log(carousel)
carousel = Array.from(carousel).map(element => new Carousel(element))
console.log(carousel)


/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/