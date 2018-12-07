class Carousel {
    constructor(carousel){
        this.element = carousel;
        this.currentIndex = 1;
        this.data = this.element.dataset.position;
        this.leftBTN = this.element.querySelector('.left-button');
        this.rightBTN = this.element.querySelector('.right-button');
        this.leftBTN.addEventListener('click', () => this.left())
        this.rightBTN.addEventListener('click', () => this.right())
    }
    right(){
        this.currentIndex +=1;
        if(this.currentIndex >= 5){
            this.currentIndex = 1
        }
        this.element.querySelectorAll('.slider').forEach((cv)=>{cv.classList.toggle('active-slider',false)})
        this.element.querySelector(`.slider[data-position='${this.currentIndex}']`).classList.toggle('active-slider',true)
    }
    left(){
        this.currentIndex -=1;
        if(this.currentIndex <= 0){
            this.currentIndex = 4
        }
        this.element.querySelectorAll('.slider').forEach((cv)=>{cv.classList.toggle('active-slider',false)})
        this.element.querySelector(`.slider[data-position='${this.currentIndex}']`).classList.toggle('active-slider',true)
    }
}

let carousel = document.querySelector('.carousel');

new Carousel(carousel)

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

//These hints were very helpful^^