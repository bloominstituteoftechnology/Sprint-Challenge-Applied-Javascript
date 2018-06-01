class Carousel {
    constructor(element){
        this.element = element;
        console.log(this.element);  //why wont this work??
        this.left = this.element.querySelector(".left-button");
        this.right = this.element.querySelector(".right-button");
        
        console.log(this.left);
        console.log(this.right); //why wont these work??
    }

}


let carousel = $(".carousel");

// carousel = Array.from(carousel).map(carouselRef => new Carousel(carouselRef));



/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. Those buttons are gonna need some click handlers.
    3. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    4. Have fun!
*/