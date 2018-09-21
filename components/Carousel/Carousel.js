class Carousel {
    constructor(element){
        this.element = element;
        this.left = document.querySelector('.carousel .left-button');
        this.right = document.querySelector(".carousel .right-button");


        this.element.addEventListener('click', () => this.arrowLeft());
        this.element.addEventListener('click', () => this.arrowRight())

        this.imgs = document.querySelectorAll(".carousel img");
        this.imgs = Array.from(this.imgs);

    }
    arrowLeft(){
    
    }
    arrowRight(){
 
       

    }
}

let carousel = document.querySelector('.carousel');



/* If You've gotten this far, you're on your own! Although we will give you some hints:
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/ 
