class Carousel {
    constructor(element){
        this.element = element;
        console.log(this.element)
        this.left = document.querySelector('.carousel .left-button');
        this.right = document.querySelector(".carousel .right-button");


        this.element.addEventListener('click', () => this.arrowLeft());
        this.element.addEventListener('click', () => this.arrowRight())

        //this.imgs = document.querySelectorAll(".carousel img");
        //this.imgs = Array.from(this.imgs);

    }
    arrowLeft(){
    
    }
    arrowRight(){
 
       

    }
}

let carousel = document.querySelector('.carousel');
let imgs = document.querySelectorAll('.carousel img')
imgs = Array.from(imgs).map(img => new Carousel(img));


/* If You've gotten this far, you're on your own! Although we will give you some hints:
   x 1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
   x 2. You will need to grab a reference to all of the images
    3. Create a current index
   x 4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/