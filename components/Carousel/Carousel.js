class Carousel {
    constructor(element){
        this.element = element;
        this.slides = document.querySelectorAll('.carousel-img');
        this.slides = Array.from(this.slides);
        this.position = 0;
        this.right = document.querySelector('.right-button');
        this.right.addEventListener('click', () => {
            this.unselectImg();
            if(this.position >= this.slides.length-1){
                this.position = 0;
            }
            else{
                this.position+=1;
            }
            this.selectImg();
        })
        this.left = document.querySelector('.left-button');
        this.left.addEventListener('click', () => {
            this.unselectImg();
            if(this.position < 1){
                this.position += this.slides.length-1;
            }
            else{
                this.position-=1;
            }
            this.selectImg();
        })
        this.selectImg();
    }
    selectImg(){
        this.slides[this.position].classList.add('active-img');
    }
    unselectImg(){
        this.slides[this.position].classList.remove('active-img');
    }
}

let carousel = document.querySelectorAll('.carousel');
carousel = Array.from(carousel).map(element => new Carousel(element));


/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. Those buttons are gonna need some click handlers.
    3. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    4. Have fun!
*/