class Carousel {
constructor(caroElements) {
    this.caroElements = caroElements;
    console.log(this.caroElements);
    
    this.right = document.querySelector('.right-button');
    this.left = document.querySelector('.left-button');
    this.images = document.querySelectorAll('.carousel img');
    console.log(this.images)
    this.index = 0;
    this.images[this.index].style.display = "block"
    
    this.right.addEventListener('click', ()=>{
        this.clickRight();

     })

     this.left.addEventListener('click', ()=>{
        this.clickLeft();
     })

    }

    clickRight() {
        if(this.index === 3){
            this.index = -1;
        }
        ++this.index;
        this.images.forEach(image => image.style.display = "none");
        this.images[this.index].style.display = "block";
        
    }

    clickLeft() {
        if (this.index === 0){
            this.index = 4;
        }
        --this.index;
        this.images.forEach(image => image.style.display = "none");
        this.images[this.index].style.display = "block";
    }

}



let carousel = document.querySelectorAll('.carousel');
carousel = Array.from(carousel).map(caroElements => new Carousel(caroElements));

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/