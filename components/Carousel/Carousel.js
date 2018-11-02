class Carousel {
    //need constructor and properties
    constructor(imgElement) {
        this.imgElement = imgElement;
        this.pic = pic;
        console.log(pic);
    }
    // method goes here
}

// going to select all images under .carousel
let pic = document.querySelectorAll('.carousel .pics');

// create an array from the NodeList so can iterate
pic = Array.from(pic).map(link => new Carousel (link));
console.log(pic);


/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/