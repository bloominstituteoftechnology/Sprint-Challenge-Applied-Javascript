class Carousel {
    constructor(carousel){
        this.carousel = carousel;
        
        this.rightButton = document.querySelector('.right-button');
        this.leftButton = document.querySelector('.left-button');
        this.pictures = document.querySelectorAll('.carousel-img');
        this.slideIndex = 1;
        Array.from(this.pictures).map(picture => new Picture(picture));
        
        this.rightButton.addEventListener('click',() => this.toggel(1));
        this.leftButton.addEventListener('click',() => this.toggel(-1));
    }
    toggel(n){  
        this.show(this.slideIndex += n);
    }
    show(n){
        if (n > this.pictures.length) {
            this.slideIndex = 1
        } 
        if (n < 1) {
            this.slideIndex = this.pictures.length
        }
        for (let i = 0; i < this.pictures.length; i++) {
          this.pictures[i].style.display = "none"; 
        }
        this.pictures[this.slideIndex-1].style.display = "block"; 
    }
}

class Picture{
    constructor(picture){
        this.picture = picture;

        
    }

}

let carousel = document.querySelector('.carousel');

 new Carousel(carousel);
//console.log(carousel);
/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/