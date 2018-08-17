class Carousel {
    constructor(element){
        this.element = element;

        this.leftButton = this.element.querySelector(".left-button");
        this.rightButton = this.element.querySelector(".right-button");

        this.leftButton = new Button(this.leftButton);
        this.rightButton = new Button(this.rightButton);

        this.images = this.element.querySelectorAll("img");
        this.imageArray = Array.from(this.images).map( image => new Image(image));

        this.currentIndex = 1;
        this.imageArray[0]


    }
}

class Button {
    constructor(element){
        this.element = element;

        this.element.addEventHandler('click', this.click(event));
    }

    click (event){
        this.event = event;
        let images = this.event.currentTarget.parentNode.querySelectorAll("img");
            images = Array.from(images).map( image =>{ new Image(image)});
        
    }

}

class Image {
    constructor(element){
        this.element = element;

    }
    click(){

    }
}

let carousel = document.querySelectorAll(".carousel");
carousel = Array.from(carousel).map( carouselItem => new Carousel(carouselItem));

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/