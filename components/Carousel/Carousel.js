class Carousel {
    constructor(element){
        this.element = element;
        this.rightButton = this.element.querySelector('.right-button');
        this.leftButton = this.element.querySelector('.left-button');
        this.images = this.element.querySelectorAll('.carousel img');
        this.currentIndex = 0;
        this.selectImg = this.image[this.currentIndex];

        this.rightButton.addEventListener('click', () => {this.selectImg(this.rightButton)});
        this.leftButton.addEventListener('click', () => {this.selectImg(this.leftButton)});
        selectImg();
    }
    selectImg(){
        const image = this.element.querySelectorAll('.carousel img');
        
                image.forEach(function(item){
                    item.style = 'display: block';
                  });
        
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
