// var selected = '';

class Carousel {
    constructor(element){
        this.element = element;
        // console.log(`this.element is ${this.element}`)

        this.right = document.querySelector('.right-button');
        // console.log(`this.right is ${this.right}`)
        this.left = document.querySelector('.left-button');
        // console.log(`this.left is ${this.left}`)

        this.images = this.element.querySelectorAll('img');

        this.selected = 0;
        this.currentIndex = this.images[this.selected]
        this.currentIndex.style = 'display: block';

        this.right.addEventListener('click', ()=>{this.rightClick();});
        this.left.addEventListener('click', ()=>{this.leftClick();});

    }

    rightClick(){
        this.currentIndex.style = 'display: none';
        if (this.selected === this.images.length-1) {
            this.selected = 0;
        } else {
            this.selected = this.selected+=1;
        }
        this.currentIndex = this.images[this.selected]
        this.currentIndex.style = 'display: block';
    }

    leftClick(){
        this.currentIndex.style = 'display: none';
        if (this.selected === 0) {
            this.selected = this.images.length-1;
        } else {
            this.selected = this.selected-1;
        }
        this.currentIndex = this.images[this.selected]
        this.currentIndex.style = 'display: block';
    }
}

let carousel = document.querySelector('.carousel');

carousel = new Carousel(carousel);




// let carousel = document.querySelector('.carousel img');
// console.log(carousel);
// carousel.classList.add('width-100');
// carousel.style = 'display: block';

/* If You've gotten this far, you're on your own! Although 
//we will give you some hints:
    1. You will need to grab a reference to the carousel, and 
    //in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the 
    //cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/