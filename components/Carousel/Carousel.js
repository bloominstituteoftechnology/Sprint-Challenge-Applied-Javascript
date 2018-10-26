class Carousel {
    constructor(carouselEle){
        this.carouselEle = carouselEle;
        this.rightBtn = this.carouselEle.querySelector('.right-button');
        this.leftBtn = this.carouselEle.querySelector('.left-button');
        this.images = this.carouselEle.querySelectorAll('img');
        this.imgIndex = 0;
        this.images[0].classList.add('visible');
        this.leftBtn.addEventListener("click",()=>this.goLeft());
        this.rightBtn.addEventListener("click",()=>this.goRight());
    }
    goLeft(){
        let currentIndex = this.imgIndex;
        if(this.imgIndex <= 0){
            this.imgIndex = this.images.length-1;
        }
        else{
            this.imgIndex--;
        }
        TweenMax.to(this.images[currentIndex],0.5,{opacity:0,ease: Power1.easeIn,onComplete:()=>{
            this.images[currentIndex].classList.remove('visible');
            this.images[currentIndex].removeAttribute("style");
            TweenMax.from(this.images[this.imgIndex],0.5,{opacity:0, ease: Power3.easeIn});
            this.images[this.imgIndex].classList.add('visible');
        }})
    }
    goRight(){
        let currentIndex = this.imgIndex;
        if(this.imgIndex >= this.images.length-1){
            this.imgIndex = 0;
        }
        else{
            this.imgIndex++;
        }
        TweenMax.to(this.images[currentIndex],0.5,{opacity:0,ease: Power1.easeIn,onComplete:()=>{
            this.images[currentIndex].classList.remove('visible');
            this.images[currentIndex].removeAttribute("style");
            TweenMax.from(this.images[this.imgIndex],0.5,{opacity:0,ease: Power3.easeIn});
            this.images[this.imgIndex].classList.add('visible');
        }})
    }
}

let carousel = document.querySelector('.carousel');
carousel = new Carousel(carousel);

// let carousel = document.querySelector();

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

