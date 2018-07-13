class Carousel {
    constructor(attr) {
        this.element = attr;
        this.imgs = this.element.querySelectorAll("img");
        this.imgs = Array.from(this.imgs).map(image => new ImgLoad(image));
        this.activeImg = this.imgs[0];
        this.buttonL = this.element.querySelector(".left-button");
        this.buttonR = this.element.querySelector(".right-button");
        this.buttonL.addEventListener("click", () => this.left());
        this.buttonR.addEventListener("click", () => this.right());
        this.init();
    }
    init() {
        console.log(this.activeImg.element);
        this.activeImg.element.display = 'flex';
    }
    right(){        
        this.activeImg.element.display = 'none';
        console.log("test1")
        this.activeImg = this.imgs[1]//pseudocode
      }  
    left(){
        this.activeImg.element.display = 'none';
        console.log("test2");
        this.activeImg = this.imgs[-1];//pseudocode
    }
}
class ImgLoad {
    constructor(element) {
        this.element = element;
        
    }
    activeImg() {
        this.element.classList.add(".active-img");
    }
    display() {
        
    }

}
let carousel = document.querySelectorAll(".carousel");
images = Array.from(carousel).map(image => new Carousel(image));

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. Those buttons are gonna need some click handlers.
    3. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    4. Have fun!
*/