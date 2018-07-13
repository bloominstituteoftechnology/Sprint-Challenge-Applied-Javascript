class Carousel {
    constructor(item) {
        this.item = item; // The carousel div
        this.leftButton = document.querySelectorAll(".left-button");
        this.rightButton = document.querySelectorAll(".right-button");
        this.imgsArray = this.item.querySelectorAll("img");
        
        this.imgsArray = Array.from(this.imgsArray);
        
        this.activeImg = this.imgsArray[0];
        console.log(this.activeImg)
        this


    };
};

let carousel = document.querySelectorAll(".carousel");
carousel = Array.from(carousel).map( item => new Carousel(item));
// console.log(carousel);




/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. Those buttons are gonna need some click handlers.
    3. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    4. Have fun!
*/