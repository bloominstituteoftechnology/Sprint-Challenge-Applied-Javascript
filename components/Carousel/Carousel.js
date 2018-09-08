class Carousel {
    constructor(element)    {
        this.carousel = element;
        this.buttonLeft = element.querySelector(".left-button");
        this.buttonRight = element.querySelector(".right-button");
        this.imgArray = element.querySelectorAll("img");
        this.currentIndex = 0;
        this.imgArray[0].style.display = "block";
        this.clicked = false;
        this.buttonLeft.addEventListener("click",   ()  =>  this.pictureLeft());
        this.buttonRight.addEventListener("click",  ()  =>  this.pictureRight());
        this.buttonRight.addEventListener("click",  ()  =>  this.clicked = true);
    }

    pictureLeft()   {
        TweenLite.to(this.imgArray[this.currentIndex], 1, {opacity: 0, display: "none"});
        if(this.currentIndex === 0) {
            this.currentIndex = 3;
        }   else {
            this.currentIndex -= 1;
        }
        TweenLite.to(this.imgArray[this.currentIndex], 1, {opacity: 1, display: "block", delay: 1.1});
    }
    pictureRight()   {
        TweenLite.to(this.imgArray[this.currentIndex], 1, {opacity: 0, display: "none"});
        if(this.currentIndex === 3) {
            this.currentIndex = 0;
        }   else {
            this.currentIndex += 1;
        }
        TweenLite.to(this.imgArray[this.currentIndex], 1, {opacity: 1, display: "block", delay: 1.1});
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
window.setInterval(function()   {
    if(carousel.clicked === false)  {
        console.log(1);
        return carousel.pictureRight();
    }   else {
        console.log(2);
        return carousel.clicked = false;
    }

}, 5000)
