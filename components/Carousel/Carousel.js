class Carousel {
    constructor(element) {
        this.element = element; //Setting the context for element, which is the entire carousel
        this.currentIndex = 0; //Creating an index which will correlate to which image is being displayed
        this.rightButton = document.querySelector(`.right-button`); //Selecting the right button and assigning a value
        this.leftButton = document.querySelector(`.left-button`); //Selecting the left button and assigning a value
        this.images = document.querySelectorAll(`.image`);  //Creating a node list that is all of the images
        const cardArray = Array.from(this.images); //Turning the image node list into an array called cardArray
        this.selectTab(); //Running the select tab method so that it sets the initial display to be the first image, with images and currentIndex having been declared.
        this.rightButton.addEventListener(`click`, (event) => { //Click event listener on right button
            this.currentIndex++; //When the right button is clicked the index goes up
            if (this.currentIndex > cardArray.length-1) { //If the index goes up above the number of items in the images array
                this.currentIndex = 0; //It resets it back to 0, looping it around
            };
            this.selectTab(); //Run select tab to update image displayed
          });
        this.leftButton.addEventListener(`click`, (event) => { //Click event listener on left button
            this.currentIndex--; //When left button is clicked the index goes down
            if (this.currentIndex < 0) { //If the index goes below 0
                this.currentIndex = cardArray.length-1; //Set the index to the last number of the array's length, looping it around
            };
            this.selectTab(); //Run select tab to update image displayed
          });
        }
    
    selectTab(){ //Method which changes what image is being displayed
        // Array.from(this.images).forEach(function(element){
        //     element.classList.remove(`bounceIn`);
        //   });
        Array.from(this.images).forEach(function(element){ // Iterate through the NodeList
           element.style.display = `none`; //Setting all of the images' styles to be none
        });
        
        // this.images[this.currentIndex].classList.add(`bounceIn`);
        this.images[this.currentIndex].style.display = `block`;// Make the current image that is selected visible by making it display block
    }

}

let carousel = document.querySelector(".carousel"); //Selecting the carousel div and passing it into the constructor to make into a class
carousel = new Carousel(carousel); //Creating an instance of the Carousel class on the page so the functionality is there

//INSTRUCTIONS

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/