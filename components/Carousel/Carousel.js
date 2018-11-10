class Carousel {
    constructor(carouselElement){
        this.carouselElement = carouselElement
        this.navLeft = this.carouselElement.querySelector('.left-button');
        this.navRight = this.carouselElement.querySelector('.right-button');
        this.images = this.carouselElement.querySelectorAll('img');

        this.navLeft.addEventListener('click', (e) => this.navigate(-1));
        this.navRight.addEventListener('click', (e) => this.navigate(1));
        this.navigate(0);
      
    }
    navigate(direction){
        let counter = 0;
        let carouselLength = this.carouselElement.length;
        let currentImg = this.images[0];

        currentImg.classList.remove('current');
               
        counter += direction;
        
        if(direction === -1 && counter < 0){
            counter = carouselLength - 1;
        }
        if(direction === 1 && !this.images[counter]){
            counter = 0;
        }
        currentImg = this.images[counter];
        currentImg.classList.add('current');
    }

}

let carousel = document.querySelector('.carousel');
carousel = new Carousel(carousel);


/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/