class Carousel {
    constructor(element) {
        this.element = element;

        this.photoContainer = this.element.querySelector('.carousel');
        this.next = this.element.querySelector('.right-button');
        this.prev = this.element.querySelector('.left-button');
        this.photos = this.querySelectorAll('.carousel img');


        this.count = 0;
        this.photoTot = this.photos.length;
        this.current = this.photos[0];


        this.next.addEventListener('click', () => {
            this.navigate(-1)
        });

    }


}



let carousel = document.querySelectorAll(".carousel");



/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/