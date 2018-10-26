class Carousel {
    constructor(element) {
    this.element = element;
    this.leftButton = document.querySelector('.left-button');
    this.rightButton = document.querySelector('.right-button');
    this.corouselImgs = document.querySelectorAll('.carousel img');
    this.index = 0;
    this.corouselImgs[this.index].style.display = 'block';
     
    this.leftButton.addEventListener('click', () => { this.swapImageLeft() });
    this.leftButton.style.zIndex = 3;
    this.rightButton.addEventListener('click', () =>  { this.swapImageRight() });
    

    }

    swapImageRight() {
        if(this.index !== this.corouselImgs.length-1){
            this.corouselImgs[this.index].style.display = 'none'; 
            this.index++;
            this.corouselImgs[this.index].style.display = 'block';

           TweenLite.from(this.corouselImgs[this.index], 1, {autoAlpha:0, x: 100});
        
        }
    }

    swapImageLeft(){
        if(this.index > 0){
            this.corouselImgs[this.index].style.display = 'none'; 
            this.index--;
            this.corouselImgs[this.index].style.display = 'block';

            TweenLite.from(this.corouselImgs[this.index], 1, {autoAlpha:0, x: -100});
        }
    }
}

//let carousel = document.querySelector();

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

let carousel = document.querySelectorAll('.carousel');
// let corouselImgs = document.querySelectorAll('.carousel img');
// const leftButton = document.querySelector('.left-button');
// const rightButton = document.querySelector('.right-button');

carousel = Array.from(carousel).map( element => new Carousel(element));
console.log(carousel);

//corouselImgs[0].element.classList.add('block');