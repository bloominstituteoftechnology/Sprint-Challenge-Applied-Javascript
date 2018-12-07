class Carousel {
    constructor(carousel) {
        this.carousel = carousel;

        this.leftBtn = document.querySelector('.left-button');
        this.rightBtn = document.querySelector('.right-button');
        
        this.images = document.querySelectorAll('.carousel img');
        this.images[0].style.display = 'block';

        let currentIndex = 0;

        this.leftBtn.addEventListener('click', () => {
            if (currentIndex === 0) {
                this.images[currentIndex].style.display = 'block';
            } else if (currentIndex > 0) {
                this.images[currentIndex].style.display = 'none'
                currentIndex -= 1
                this.images[currentIndex].style.display = 'block';
            }
        });

        this.rightBtn.addEventListener('click', () => {
            if (currentIndex === this.images.length - 1) {
                currentIndex = this.images.length;
                this.images[currentIndex].style.display = 'block';
                this.rightBtn.removeEventListener('click');
            }
            
            currentIndex === 0
            this.images[currentIndex].style.display = 'none';
            currentIndex += 1
            this.images[currentIndex].style.display = 'block';
            
            
        });



        console.log(this.images);

        console.log(this.leftBtn);


    }
}

let carousel = document.querySelector('.carousel');
carousel = new Carousel;
console.log(carousel);

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/


