class Carousel {
    constructor(element) {
        this.element=element;
        this.images=this.element.querySelectorAll('img');
        this.images=Array.from(this.images).map(img=>new ImageSlide(img,this));
        this.leftButton=this.element.querySelector('.left-button').addEventListener('click', this.moveLeft.bind(this));
        this.rightButton=this.element.querySelector('.right-button').addEventListener('click', this.moveRight.bind(this));
        this.activeImg=this.images[0].element.dataset.number;
        this.number=0;
        this.init();
    }
    init() {
        document.querySelector(`.carousel img[data-number="${this.activeImg}"]`).style.display='block';
    }
    
    getSlides(data) {
        return document.querySelectorAll(`.carousel img`); 
    }
    moveLeft(){
        if (this.number>0) {
            this.number-=1;
        } else {
            this.number=3;
        }
        TweenLite.to(document.querySelector(`.carousel img[data-number="${this.activeImg}"]`), 0.1, {css:{display:'none'}, ease: Power4.easeIn});
        this.activeImg=this.images[this.number].element.dataset.number;
        TweenLite.to(document.querySelector(`.carousel img[data-number="${this.activeImg}"]`), 0.1, {css:{display:'block'}, ease: Power4.easeOut});
    }
    moveRight(){
        if (this.number<3) {
            this.number+=1;
        } else {
            this.number=0;
        }
        TweenLite.to(document.querySelector(`.carousel img[data-number="${this.activeImg}"]`), 0.1, {css:{display:'none'}, ease: Power4.easeIn});
        this.activeImg=this.images[this.number].element.dataset.number;
        TweenLite.to(document.querySelector(`.carousel img[data-number="${this.activeImg}"]`), .1, {css:{display:'block'}, ease: Power4.easeOut});
    }
}
class ImageSlide {
     constructor(element,parent) {
        this.element=element;
        this.parent=parent;
        this.slide= this.parent.getSlides(this.element.dataset.number);
        this.slide= Array.from(this.slide).map(image=>new Image(image));
    } 
}

let carousel = document.querySelectorAll('.carousel');

carousel=Array.from(carousel).map(carousel=>new Carousel(carousel));
/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. Those buttons are gonna need some click handlers.
    3. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    4. Have fun!
*/