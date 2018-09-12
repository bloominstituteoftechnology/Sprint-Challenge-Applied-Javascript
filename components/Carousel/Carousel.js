class Carousel {
    constructor(element) {
        // Assign this.element to the element reference.
        this.element = element;
        let currIndex = 0;

        // 2. Grab a reference to all of the images.
        this.images = document.querySelectorAll('.carousel img');
        this.images = Array.from(this.images);
        console.log("images", this.images);

        // 3. Need the current index
        let i = 0;
        this.images.forEach( function(element){
            if( element.style.display === "inline" )
                currIndex = i;
            console.log("in foreach", currIndex);
        });
        console.log("index", currIndex);
        // 1. Grab the left button & 4. add event listener
        this.left = document.querySelector('.carousel .left-button');
        this.left.addEventListener( 'click', () => {this.leftClick(currIndex)} );

        // 1. Grab the right button & 4. add event listener
        this.right = document.querySelector('.carousel .right-button');
        this.right.addEventListener( 'click', () => {this.rightClick(currIndex)} );
    };

    leftClick(currIndex){
        let newImg = 0;
        this.images = Array.from(document.querySelectorAll('.carousel img'));

        // Set current image visibility to none
        this.images[currIndex].style.display = "none";

        // Get previous image index
        if( currIndex === 0 )
            newImg = this.images.length -1;
        else
            newImg = currIndex - 1;

        // Set previous image visible
        this.images[newImg].style.display = "inline";
    };

    rightClick(currIndex){
        let newImg = 0;
        this.images = Array.from(document.querySelectorAll('.carousel img'));

        // Set current image visibility to none
        this.images[currIndex].style.display = "none";

        // Get next image index
        if( currIndex === this.images.length -1 )
            newImg = 0;
        else
            newImg = currIndex + 1;

        // Set next image visible
        this.images[currIndex].style.display = "inline";
    };
}

// 1. Grab a reference to the carousel
let carousel = document.querySelector('.carousel');
console.log("carousel", carousel);

carousel = new Carousel(carousel);

// Set the default image to display
let defaultImage = document.querySelector('.carousel img');
defaultImage.style.display = "inline";
// Set z-index to -1 so that it doesn't scroll over the menu
defaultImage.style.zIndex = "-1";

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
/*
<div class="carousel">
<div class="left-button"><</div>
<img src="./assets/carousel/mountains.jpeg" />
<img src="./assets/carousel/computer.jpeg" />
<img src="./assets/carousel/trees.jpeg" />
<img src="./assets/carousel/turntable.jpeg" />
<div class="right-button">></div>
</div>
*/