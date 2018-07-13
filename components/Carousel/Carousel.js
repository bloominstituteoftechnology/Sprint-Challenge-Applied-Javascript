class Carousel {
    constructor(element){
        this.element = element;
        this.slides = document.querySelectorAll('.carousel-img');
        this.slides = Array.from(this.slides).map(img => {return new CarouselImg(img)});
        this.position = 0;
        this.right = document.querySelector('.right-button');
        this.right.addEventListener('click', () => {
            if(this.position >= this.slides.length-1){
                this.position = 0;
            }
            else{
                this.position ++;
            }
            this.updateActive(this.slides[this.position]);
        })
        this.left = document.querySelector('.left-button');
        this.left.addEventListener('click', () => {
            if(this.position < 1){
                this.position += this.slides.length-1;
            }
            else{
                this.position--;
            }
            this.updateActive(this.slides[this.position]);
        })
        this.activeImg = this.slides[this.position];
        this.init();
    }
    init(){
        this.slides.selectImg();
    }
    updateActive(imgElement){
        this.activeImg.deselectImg();
        this.activeImg = imgElement;
        this.activeImg.selectImg();
    }
}

class CarouselImg {
    constructor(element){
        this.element = elememt;
    }
    selectImg(){
        this.slides.classList.add('active-img');
    }
    deselectImg(){
        this.slides.classList.remove('active-img');
    }
}

let carousel = document.querySelector('.carousel');
carousel = Array.from(carousel).map(element => new Carousel(element));

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. Those buttons are gonna need some click handlers.
    3. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    4. Have fun!
*/