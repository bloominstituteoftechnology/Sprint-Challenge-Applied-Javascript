class Carousel {
    constructor(element){
        this.element = element;
        this.imgs = this.element.querySelectorAll('img');
        
        let currentSlide = this.imgs[0];
        /*

        Wow this is difficult

        */
        this.RBtn = this.element.querySelector('.right-button');
        this.LBtn = document.querySelector('.left-button');

        this.RBtn.addEventListener('click', () => {
            this.showImg(slideIndex);
        });
    }
    showImg(){
        this.currentSlide.style.display = "inline-block";
    }
}

let carousel = document.querySelectorAll(".carousel");
carousel = Array.from(carousel).map(element => new Carousel(element));


/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/