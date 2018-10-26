class Carousel {
    constructor(myCarousel){
        this.myCarousel = myCarousel;
        this.leftButton = myCarousel.querySelector(".left-button");
        this.rightButton = myCarousel.querySelector(".right-button");
        this.images = this.myCarousel.querySelectorAll("img");
        this.images = Array.from(this.images).map( image => new Image (image));
        this.index = new Index (this.images.length);
        this.images[this.index.position].select();

        this.leftButton.addEventListener('click', () => this.advanceLeft() );
        this.rightButton.addEventListener('click', () => this.advanceRight() );
    }
    advanceLeft(){
        this.images[this.index.position].deselect();
        this.index.advance('left');
        this.images[this.index.position].select();
    }
    advanceRight(){
        this.images[this.index.position].deselect();
        this.index.advance('right');
        this.images[this.index.position].select();
    }

}

class Image {
    constructor(image){
        this.image = image;
    }
    select(){
        this.image.style.display = "block";
    }
    deselect(){
        this.image.style.display = "none";
    }
}

class Index {
    constructor (max){
        this.max = max;
        this.position = 0;
    }
    advance(direction){
        if (direction === 'left'){
            if (this.position === 0){
                this.position = this.max-1;
            } else {
                this.position--;
            }

        } else {
            if (this.position === this.max-1){
                this.position = 0;
            } else {
                this.position++;
            }
        }
    }
    
}

let carousel = document.querySelector(".carousel");

carousel = new Carousel(carousel);

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/