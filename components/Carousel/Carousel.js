class Carousel {
    constructor(element){
        this.element = element;
        
        this.leftArrow = element.querySelector('.left-button');
        console.log(this.leftArrow);
        this.rightArrow = element.querySelector('.right-button');
        this.images= element.querySelectorAll('img');
        console.log(this.images);
        
        this.currentIndex= 0;
        this.images[0].style.display ='block';
        
        this.rightArrow.addEventListener('click', (event) => this.rightArrowClick(event))
        this.leftArrow.addEventListener('click', (event) => {this.leftArrowClick(event)})

    }

    rightArrowClick(){
    this.images[this.currentIndex].style.display = 'none'
        if (this.currentIndex === this.images.length - 1) {
            this.currentIndex = 0
        } else {
            this.currentIndex = this.currentIndex + 1
        }
        this.images[this.currentIndex].style.display = 'block'
    }

    leftArrowClick(event){
        this.images[this.currentIndex].style.display = 'none'
        if(this.currentIndex === 0){
            this.currentIndex = this.images.length - 1
        } else {
            this.currentIndex = this.currentIndex - 1
        }
        this.images[this.currentIndex].style.display = 'block'
    }




}



// let carousel = document.querySelectorAll('.carousel');
// console.log(carousel);

// let images= document.querySelectorAll('.carousel img');
// console.log(images);

// carousel = Array.from(carousel).map(carousels => {
//     return new Carousel(carousels);
// });

let carousel = document.querySelector('.carousel');
carousel = new Carousel(carousel);

// images = Array.from(images).map(image => new Picture(image));


/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/