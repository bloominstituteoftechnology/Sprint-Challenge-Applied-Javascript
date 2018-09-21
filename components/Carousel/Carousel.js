class Carousel {
    constructor(element){
        // assign this.element to the element reference
        this.element = element;

        // find all the images in this carousel
        this.images = this.element.getElementsByTagName('img');
        
        // convert this.images into a real array
        this.images = Array.from(this.images);

        let currentIndex = 0;

        this.leftButton = this.element.querySelectorAll('.left-button');
        this.rightButton = this.element.querySelectorAll('.right-button');
        Array.from(this.leftButton).map(button => addEventListener('click', (event => {this.leftSelected(event)})));
        Array.from(this.rightButton).map(button => addEventListener('click', (event => {this.rightSelected(event)})));
    }


    leftSelected(){
        currentIndex -= 1;
        if(currentIndex < 0){
            currentIndex = this.images.length - 1;
        }
        nextImage(currentIndex);
    }

    rightSelected(){
        currentIndex += 1;
        if(currentIndex > this.images.length - 1){
            currentIndex = 0;
        }
        nextImage(currentIndex);
    }

    nextImage(index){
        // set display on all images to null
        this.images.map(image => image.style.display = '');

        //set current image to display
        this.images[index].style.display = 'block'; 
    }
}

let carousels = document.querySelectorAll('.carousel');
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));



/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/