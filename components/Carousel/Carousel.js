class Carousel {
    constructor(element) {
        //passes in the carousel node element
        this.element = element;
        
        this.leftButton = this.element.querySelector('.left-button');
        this.rightButton = this.element.querySelector('.right-button');
        
        this.images = this.element.querySelectorAll('img');
        this.imageLength = this.images.length;
        
        //Sets the first image to display automatically
        this.index = 0;
        this.images[this.index].style.display = "flex";
        
        this.leftButton.addEventListener('click', this.cycleLeft.bind(this));
        this.rightButton.addEventListener('click', this.cycleRight.bind(this))
    }
    cycleLeft() {
        
    }
    
    cycleRight() {
        if(this.index < this.imageLength-1) {
            this.index++;
            this.images[this.index].style.display = "flex";
            this.images[this.index-1].style.display = "none"
        }
        
        else {
            this.index = 0;
            this.images[this.index].style.display = "flex";
            this.images[this.imageLength-1].style.display = "none"
            
        }

        console.log(this.index);

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

