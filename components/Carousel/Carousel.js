class Carousel {
    constructor(element){
        this.element = element;
        this.rightBtn = this.element.querySelector('.right-button'); 
        this.leftBtn = this.element.querySelector('.left-button');
        this.imgs = this.element.querySelectorAll('img');
        this.imgs = Array.from(this.imgs).map(img => (new Image(img, this)))
        this.activeImg = imgs[0];
        console.log(this.activeImg);
        this.init();

        this.rightBtn.addEventListner('click', ()=>{

        });
        this.leftBtn.addEventListner('click', ()=>{

        });
    }

    init(){
        this.activeImg.selectImg();
  
    }
    updateActive(tabElement){
        // Invoke the deselectTab() on activeTab to clear the styling on the tab
        this.activeImg.deselectImg();
        // assign activeTab to tabElement to update it's apperance
        this.activeImg = tabElement;
    }

}
class Image{
    constructor(element, parent){
        this.element = element;
    }
    selectImg(){
        // Update the style of this.element to display = null
        this.element.style.display = 'block';
    }
    deselectImg(){
        // Update the style of this.element to display = "none"
        this.element.style.display = 'none';
    }
}

let carousel = document.querySelectorAll('.carousel');
carousel = Array.from(carousel).map(item => (new Carousel(item)));

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. Those buttons are gonna need some click handlers.
    3. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    4. Have fun!
*/