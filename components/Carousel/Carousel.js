class Carousel {
    constructor(carousel){
        this.carousel = carousel;

        //at event listeners to the buttons
        this.leftButton = document.querySelector('div.left-button').addEventListener('click',e=>{
            this.changePicture(e);
        })
        this.rightButton = document.querySelector('div.right-button').addEventListener('click',e=>{
            this.changePicture(e);
        })

        // get an array of images and the index
        this.images=Array.from(document.querySelectorAll('.carousel img'));
        this.index = 0;

        // automatically set the first image to display flex
        this.images[this.index].style.display= 'flex'
    }

    //((x-1) + k) % k 'wrap around' backwards with modulo where x is current index and k is your images.length
    changePicture(e){ 
        // set the current image the display non
        this.images[this.index].style.display= 'none'

        // iterate up or down depending on Class name
        if(e.target.className ==='right-button')
            this.index = (this.index + 1) % this.images.length
        else
            this.index = ((this.index - 1) + this.images.length) % this.images.length

        // set the new index image to display flex
        this.images[this.index].style.display= 'flex'
    }
}



let carousel = new Carousel(document.querySelector('div.carousel'));
// console.log(carousel)

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/