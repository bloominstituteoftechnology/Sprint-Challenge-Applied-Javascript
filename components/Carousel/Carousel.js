class Carousel {
    constructor(element) {
        this.element = element;
        this.items = document.querySelectorAll('.carousel img');
        this.items = Array.from(this.items);

        this.leftBtn = document.querySelector('.left-button');
        this.rightBtn = document.querySelector('.right-button');
        
        this.count = 0;
        this.activeSlide = this.items[this.count];
        this.showPics(this.activeSlide);
        
        this.rightBtn.addEventListener('click', () => {
            this.clickRt();
        })
        this.leftBtn.addEventListener('click', () => {
            this.clickLt();
        })
    }
    showPics(element) {
        element.style = "display: block";
    }
    hidePics(element) {
        element.style = "display: none";
    }


    clickRt() {
            this.hidePics(this.activeSlide);
            this.count++;
            if (this.count === this.items.length) {
                this.count = 0;
            }
            this.activeSlide = this.items[this.count];
            this.showPics(this.activeSlide);
            return this.count;
        
    }
    clickLt() {
            this.hidePics(this.activeSlide);
            this.count--;
            if (this.count < 0){
                this.count = this.items.length - 1;
            }
            this.activeSlide = this.items[this.count];
            this.showPics(this.activeSlide);
            return this.count;
    }
}

let carousel = document.querySelectorAll(".carousel");
carousel = Array.from(carousel).map( carousel => new Carousel(carousel));

 




/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
