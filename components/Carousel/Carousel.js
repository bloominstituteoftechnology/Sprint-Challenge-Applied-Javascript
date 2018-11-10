class Carousel {
    constructor(element) {
        this.element = element;
        this.leftBtn = document.querySelector('.carousel .left-button');
        this.rightBtn = document.querySelector('.carousel .right-button');
        this.imgNodeList = document.querySelectorAll('.carousel img');
        this.storedValue = 0
        this.curImg = this.imgNodeList[this.storedValue];
        this.curImg.style.display = 'block';
        this.leftBtn.addEventListener('click', () => this.left());
        this.rightBtn.addEventListener('click', () => this.right());
        
        
    }
    left() {
        if (this.storedValue === 0) {
            this.storedValue = this.imgNodeList.length - 1;
        } else {
            this.storedValue--;
        }
        this.curImg.style.display = 'none';
        this.curImg = this.imgNodeList[this.storedValue];
        this.curImg.style.display = 'block';        
    }
    right() {
        if (this.storedValue === this.imgNodeList.length -1) {
            this.storedValue = 0;
        } else {
            this.storedValue++;
        }
        this.curImg.style.display = 'none';
        this.curImg = this.imgNodeList[this.storedValue];
        this.curImg.style.display = 'block';
    }

}



let carousel = document.querySelector('.carousel');
carousel = new Carousel(carousel);



/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/