class Carousel {
    constructor(caroImageElement) {
        
        this.carouselImage = caroImageElement;
        this.currentInd = 0;
        this.leftArrow = document.querySelector('.left-button');
        this.rightArrow = document.querySelector('.right-button');
        this.caroImgs = carousel.querySelectorAll('img');
        this.caroImgs[this.currentInd].style.display = 'block';
        
        this.leftArrow.addEventListener('click', () => this.selectLeft());
        this.rightArrow.addEventListener('click', () => this.selectRight());
    }

    selectLeft() {
        this.caroImgs = document.querySelectorAll('img');

        this.caroImgs.forEach(img => {
            img.style.display ='none';
        });

        --this.currentInd;
        if(this.currentInd < 0) {
            this.currentInd = 3;
        }

        this.caroImgs[this.currentInd].style.display = 'block';
        console.log(this.currentInd);
    }

    selectRight() {
        this.caroImgs = document.querySelectorAll('img');

        this.caroImgs.forEach(img => {
            img.style.display ='none';
        });

        ++this.currentInd;
        if(this.currentInd > 3) {
            this.currentInd = 0;
        }

        this.caroImgs[this.currentInd].style.display = 'block';
        console.log(this.currentInd);
    }
} // Carousel



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