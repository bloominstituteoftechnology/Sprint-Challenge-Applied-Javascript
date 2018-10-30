class Carousel {
    // first, assign our DOM element to our element, get that ref yo
    constructor(poop){

        this.poop = poop;
        // next, i think we need to get those left and right buttons - do i grab them at the same time??
        
//         this.btnLeft = document.querySelector('.left-button');
        
//         console.log(this.btnLeft);
//         // im going to seperate them
//         this.btnRight = document.querySelector('.right-button');

//         this.caroImgs = document.querySelectorAll('.img');
//         console.log(this.caroImgs);
            this.btnLeft = this.poop.querySelector('.left-button');
            this.btnRight = this.poop.querySelector('.right-button');
 
            this.images = this.poop.querySelectorAll('img');

            // lets get that first img up
            this.index = 0; //start from the first
            //this.images[0].style.display = 'block';  //working!
            //make it dynamic!
            this.images[this.index].style.display = 'block';
            //i need dem click events, so when we press btnRight, it goes to the next guy
            this.btnRight.addEventListener('click', () => this.fadeIn());

        
    }
    fadeIn() {
        this.images[this.index].style.display = 'none';
        this.index += 1;
        this.images[this.index].style.display = 'block';
      }
    

}

// dude, this is totally a way to put those two together down here but i dont remember how
// CAVEMAN CAVEMAN CAVEMAN
let carousel = document.querySelectorAll('.carousel');
carousel = Array.from(carousel).map(caro => new Carousel(caro));

//carousel.something( caro => new Carousel(caro))
//crap, need to make a Carousel

console.log(carousel);

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/