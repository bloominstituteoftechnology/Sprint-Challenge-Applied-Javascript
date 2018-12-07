class Carousel {
    constructor(carElement){
        this.element = carElement;
        this.left = this.element.querySelector('.left-button');
        this.right = this.element.querySelector('.right-button');
        this.imgs = this.element.querySelectorAll('img');
        this.numImgs = this.imgs.length;
        this.currentIndex = 0;
        this.imgs[0].style.display = "block";
        this.left.addEventListener('click', () => this.leftClick());
        this.right.addEventListener('click', () => this.rightClick());
    }

    leftClick(){
        if(this.currentIndex === 0){
            this.currentIndex = this.numImgs - 1;
        } else {
            this.currentIndex--;
        }
        this.imgs.forEach(el => el.style.display = 'none');
        this.imgs[this.currentIndex].style.display = 'block';
    }

    rightClick(){
        if(this.currentIndex === this.numImgs - 1){
            this.currentIndex = 0;
        } else {
            this.currentIndex++;
        }
        this.imgs.forEach(el => el.style.display = 'none');
        this.imgs[this.currentIndex].style.display = 'block';
    }
}

let carousel = new Carousel(document.querySelector('.carousel'));
/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/