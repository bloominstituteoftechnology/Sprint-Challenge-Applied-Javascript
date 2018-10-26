class Carousel {
    constructor(imgElement) {
        this.carouselImg = imgElement;
        this.current = 0;
        this.next = document.querySelector('.right-button');
        this.prev = document.querySelector('.left-button');
        this.photos = carousel.querySelectorAll('img');
        this.photos[this.current].style.display = 'block';



        this.next.addEventListener('click', () => this.selectNext());
        this.prev.addEventListener('click', () => this.selectPrev());
    }

    selectPrev() {
        this.photos = document.querySelectorAll('img');

        this.photos.forEach(img => {
            img.style.display = 'none';
        });

        --this.current;
        if (this.current < 0) {
            this.current = 3;
        }

        this.photos[this.current].style.display = 'block';
        console.log(this.current);
    }

    selectNext() {
        this.photos = document.querySelectorAll('img');

        this.photos.forEach(img => {
            img.style.display = 'none';
        });

        ++this.current;
        if (this.current > 3) {
            this.current = 0;
        }

        this.photos[this.current].style.display = 'block';
        console.log(this.current);
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