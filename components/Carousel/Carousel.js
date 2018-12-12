class Carousel {
    constructor(buttonElement) {
        this.buttonElement = buttonElement;
        this.imgs = document.querySelectorAll('.carousel img');
        this.imgs = Array.from(this.imgs).map(img => {
            return new CarouselImg(img);
        })
        console.log(this.imgs)
        this.buttonElement.addEventListener('click', () => {
            if (this.buttonElement === document.querySelector('.left-button')) {
                
            }else{
                
            }
            this.selectButton();
        })
    }
    selectButton() {
        // this.imgs[0].selectImg();
    }

}

class CarouselImg {
    constructor(imgElement) {
        this.imgElement = imgElement;
    }
    selectImg() {
        this.imgElement.style.display = 'block';
    }

}

let carousel = document.querySelectorAll('.left-button, .right-button').forEach(button => new Carousel(button));

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/