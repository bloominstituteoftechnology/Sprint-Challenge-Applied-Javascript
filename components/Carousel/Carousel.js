class Carousel {
    constructor(element) {
        //passes in the carousel node element
        this.element = element;
        
        this.leftButton = this.element.querySelector('.left-button');
        this.rightButton = this.element.querySelector('.right-button');
        
        this.images = this.element.querySelectorAll('img');
        this.imageLength = this.images.length;
        
        //Sets the first image to display automatically. 
        //this.index will keep track of which image to display
        this.index = 0;
        this.images[this.index].style.display = "flex";
        
        this.leftButton.addEventListener('click', this.cycleLeft.bind(this));
        this.rightButton.addEventListener('click', this.cycleRight.bind(this))
    }
    cycleLeft() {
        //checks if index is greater than 0. If index is zero, the else statement will reset index to the last image
        if(this.index > 0) {
            //Hides the current image
            this.images[this.index].style.display = "none";
            //subtracts index to get the previous image
            this.index--;
            //displays previous image
            //displays the previous image
            this.images[this.index].style.display = "flex";
            //
        }

        else {
            //Can't have index be a negative number, so this resets index to the largest index possible.
            //This will then loop to the image with the largest index number
            this.index = this.imageLength - 1;
            this.images[this.index].style.display = "flex";
            this.images[0].style.display = "none"
        }
    }
    
    cycleRight() {
        //checks if index is less than the largest possible index. If index is, the else statement will reset index to 0

        if(this.index < this.imageLength-1) {
            //hides the current display
            this.images[this.index].style.display = "none";
            //Adds 1 to index
            this.index++;
            //displays the next image
            this.images[this.index].style.display = "flex";
        }
        
        else {
            //hides the current image
            this.images[this.index].style.display = "none";
            //Resets index to 0 if the image with the largest index was displayed
            this.index = 0;
            //displays the first first
            this.images[this.index].style.display = "flex";
            
        }
        
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

