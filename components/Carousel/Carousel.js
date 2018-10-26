class Carousel {
    constructor(element){
        this.element = element;
        
        this.leftBtn = this.element.querySelector('.left-button');
        this.rightBtn = this.element.querySelector('.right-button');

        this.currentIndex = 0;

        this.images = Array.from(element.querySelectorAll('img'))

        this.images[0].style.display = "block";

        this.leftBtn.addEventListener('click', () => this.leftImage());
        this.rightBtn.addEventListener('click', () => this.rightImage());
    }
    leftImage(){
        TweenMax.fromTo(this.images[this.currentIndex], 1, {opacity : 1},{opacity:0});
        if(this.currentIndex < 1)
            this.currentIndex = this.images.length ;
        this.currentIndex--;
        this.images.forEach((img) => img.style.display = "none");
        this.images[this.currentIndex].style.display = "block";
        TweenMax.fromTo(this.images[this.currentIndex], 2, {opacity : 0},{opacity:1});
        
    }
    rightImage(){
        TweenMax.fromTo(this.images[this.currentIndex], 1, {opacity : 1},{opacity:0});
        if(this.currentIndex >= this.images.length -1)
            this.currentIndex = -1;
        this.currentIndex++;
        this.images.forEach((img) => img.style.display = "none");
        this.images[this.currentIndex].style.display = "block";
        TweenMax.fromTo(this.images[this.currentIndex], 2, {opacity : 0},{opacity:1});
        
    }

}


let carousel = document.querySelector('.carousel');
carousel = new Carousel( carousel);



/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/