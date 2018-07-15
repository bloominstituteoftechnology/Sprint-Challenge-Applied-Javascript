class Carousel {
    constructor(item) {
        this.item = item; // The carousel div
        this.leftButton = document.querySelector(".left-button");
        this.rightButton = document.querySelector(".right-button");
        this.imgsArray = this.item.querySelectorAll("img");
        this.rightCounter = 0;
        this.leftCounter = this.imgsArray.length;
        this.activeImg = this.imgsArray[this.leftCounter];
        this.imgsArray = Array.from(this.imgsArray);
        this.leftButton.addEventListener("click", () => { this.updateImageLeft() });
        this.rightButton.addEventListener("click", () => { this.updateImageRight() });
        this.init();
    };

    init(){
        this.activeImg = this.imgsArray[0];
        this.activeImg.style.display = "block";
    }

    updateImageRight() {
        this.rightCounter += 1;
        this.activeImg = this.imgsArray[this.rightCounter];
        this.imgsArray.forEach( img => img = img.style.display = "none");
        this.activeImg.style.display = "block";
        if (this.rightCounter === this.imgsArray.length-1) {
            this.rightCounter = -1;
        }
    }
    updateImageLeft() {
        this.leftCounter -= 1;
        this.activeImg = this.imgsArray[this.leftCounter];
        this.imgsArray.forEach( img => img.style.display = "none");
        this.activeImg.style.display = "block";
        if (this.leftCounter === 0) {
            this.leftCounter = this.imgsArray.length;
        }

    }
};

let carousel = document.querySelectorAll(".carousel");
carousel = Array.from(carousel).map( item => new Carousel(item));




/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. Those buttons are gonna need some click handlers.
    3. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    4. Have fun!
*/