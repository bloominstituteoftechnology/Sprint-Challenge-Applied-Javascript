class Carousel {
    constructor(element){
        this.element = element;
        
        this.leftBtn = this.element.querySelector('.left-button');
        this.rightBtn = this.element.querySelector('.right-button');

        this.currentIndex = 0;

        this.images = Array.from(element.querySelectorAll('img'))
        console.log(this.images);

        this.images[0].style.display = "block";

        this.leftBtn.addEventListener('click', () => this.leftImage());
        this.rightBtn.addEventListener('click', () => this.rightImage());
    }
    leftImage(){
        if(this.currentIndex < 1)
            this.currentIndex = this.images.length ;
        this.currentIndex--;
        this.images.forEach((img) => img.style.display = "none");
        console.log(this.currentIndex);
        this.images[this.currentIndex].style.display = "block";
        
    }
    rightImage(){
        if(this.currentIndex == this.images.length -1)
            this.currentIndex = -1;
        this.currentIndex++;
        this.images.forEach((img) => img.style.display = "none");
        this.images[this.currentIndex].style.display = "block";
        
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