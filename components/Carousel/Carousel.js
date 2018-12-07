class Carousel {
    constructor(carousel){
        this.element = carousel;
        this.currentIndex = 1;
        this.data = this.element.dataset.position;
        this.leftBTN = this.element.querySelector('.left-button');
        this.rightBTN = this.element.querySelector('.right-button');
        this.leftBTN.addEventListener('click', () => this.left())
        this.rightBTN.addEventListener('click', () => this.right())
    }
    right(){
        this.currentIndex +=1;
        if(this.currentIndex >= 5){
            this.currentIndex = 1
        }
        this.element.querySelectorAll('.slider').forEach((cv)=>{cv.classList.toggle('active-slider',false)})
        this.element.querySelector(`.slider[data-position='${this.currentIndex}']`).classList.toggle('active-slider',true)
    }
    left(){
        this.currentIndex -=1;
        if(this.currentIndex <= 0){
            this.currentIndex = 4
        }
        this.element.querySelectorAll('.slider').forEach((cv)=>{cv.classList.toggle('active-slider',false)})
        this.element.querySelector(`.slider[data-position='${this.currentIndex}']`).classList.toggle('active-slider',true)
    }
}

let carousel = document.querySelector('.carousel');

new Carousel(carousel)