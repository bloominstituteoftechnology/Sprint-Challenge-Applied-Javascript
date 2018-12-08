/* 
    If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

class Carousel {
    constructor(carouselElement) {
        this.carouselElement = carouselElement;

        this.leftButton = carouselElement.querySelector(".left-button");
        this.rightButton = carouselElement.querySelector(".right-button");

        this.images = carouselElement.querySelectorAll("img");
        this.indicators = carouselElement.querySelectorAll(".indicator");
        
        this.currentIndex = 0;
        this.images[0].style.display = "block";
        this.indicators[0].style.borderColor = "white";

        this.leftButton.addEventListener("click", e => this.clickedLeft(e));
        this.rightButton.addEventListener("click", e => this.clickedRight(e));

        this.indicators.forEach((indicator, i) => indicator.addEventListener("click", e => this.clickedDot(e, i)));

        this.hasOngoingAnimation = false;
    }

    clickedLeft(e) {
        if (!this.hasOngoingAnimation) {
            this.hasOngoingAnimation = true;

            const newIndex = this.currentIndex ?  
                                this.currentIndex - 1 : this.images.length - 1;
                                
            this.images[this.currentIndex].style.transform = "matrix(1, 0, 0, 1, 0, 0)";
            this.images[newIndex].style.display = "block";
            this.images[newIndex].style.opacity = 1;

            this.indicators[this.currentIndex].style.borderColor = "lightgrey";
            this.indicators[newIndex].style.borderColor = "white";

            const distance = this.images[newIndex].width;

            const slideAnimation = new TimelineMax();
            slideAnimation.fromTo(this.images[this.currentIndex], 1, {
                x: 0
            }, {
                x: distance,
                onComplete: () => {
                    this.images[this.currentIndex].style.display = "none";
                    this.currentIndex = newIndex;
                    this.hasOngoingAnimation = false;
                }
            }).fromTo(this.images[newIndex], 1, {
                x: -distance
            }, {
                x: 0
            }, 0);
        }
    }

    clickedRight(e) {
        if (!this.hasOngoingAnimation) {
            this.hasOngoingAnimation = true;

            const newIndex = this.currentIndex + 1 === this.images.length ? 
                                0 : this.currentIndex + 1;

            this.images[this.currentIndex].style.transform = "matrix(1, 0, 0, 1, 0, 0)";
            this.images[newIndex].style.display = "block";
            this.images[newIndex].style.opacity = 1;

            this.indicators[this.currentIndex].style.borderColor = "lightgrey";
            this.indicators[newIndex].style.borderColor = "white";

            const distance = this.images[newIndex].width;

            const slideAnimation = new TimelineMax();
            slideAnimation.fromTo(this.images[this.currentIndex], 1, {
                x: 0
            }, {
                x: -distance,
                onComplete: () => {
                    this.images[this.currentIndex].style.display = "none";
                    this.currentIndex = newIndex;
                    this.hasOngoingAnimation = false;
                }
            }).fromTo(this.images[newIndex], 1, {
                x: distance
            }, {
                x: 0
            }, 0);
        }
    }

    clickedDot(e, newIndex) {
        if (!this.hasOngoingAnimation && newIndex != this.currentIndex) {
            this.hasOngoingAnimation = true;

            // this.images[this.currentIndex].style.display = "none";
            this.images[newIndex].style.display = "block";
            this.images[newIndex].style.transform = "matrix(1, 0, 0, 1, 0, 0)";

            this.indicators[this.currentIndex].style.borderColor = "lightgrey";
            this.indicators[newIndex].style.borderColor = "white";

            const slideAnimation = new TimelineMax();
            slideAnimation.to(this.images[this.currentIndex], 1, {
                opacity: 0,
                onComplete: () => {
                    this.images[this.currentIndex].style.display = "none";
                    this.currentIndex = newIndex;
                    this.hasOngoingAnimation = false;
                }
            }).fromTo(this.images[newIndex], 1, {
                opacity: 0
            }, {
                opacity: 1
            }, 0);

            // TweenMax.fromTo(this.images[newIndex], 1, {
            //     opacity: 0
            // }, {
            //     opacity: 1,
            //     onComplete: () => {
            //         this.currentIndex = newIndex;
            //         this.hasOngoingAnimation = false;
            //     }
            // });
        }
    }
}

let carousel = new Carousel(document.querySelector(".carousel"));

let seconds = 0;
let autoSlider = window.setInterval(e => {
    carousel.clickedRight(e);
}, 6000);