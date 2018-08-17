

class Carousel {
    constructor(element) {
        this.element = element
        this.leftBtn = element.querySelector('.left-button')
        console.log(this.leftBtn);
        this.rightBtn = element.querySelector('.right-button')
        this.img = element.querySelectorAll('img')

        console.log(this.img[0].style.display);
       
        this.currenIndex = 0;
        this.rightBtn.addEventListener('click', ()=>{this.selectImg()})
        this.leftBtn.addEventListener('click', ()=>{this.selectImg()})
    }
    selectImg() {
        this.img.forEach(element => element.style.display= 'none'); 
        if(event.target.classList.contains('right-button')){
            this.currenIndex++ 
        }

        if(event.target.classList.contains('left-button')){
            this.currenIndex-- 
        }       
        
        
        if (this.currenIndex >= this.img.length) {
            this.currenIndex = 0;
        }     
        if (this.currenIndex < 0){
            this.currenIndex = this.img.length - 1;
        }

        this.img[this.currenIndex].style.display = 'block';
        console.log(this.currenIndex);
    }
}
let carousel = document.querySelector(".carousel");
carousel = new Carousel(carousel)
document.querySelector('img').style.display = 'block'

console.log(document.querySelector('img'));



/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
