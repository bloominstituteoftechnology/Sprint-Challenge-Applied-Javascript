class Carousel {
    constructor(items) {
        this.items = items;
        this.leftButton = this.items.querySelector('.left-button');
        this.rightButton = this.items.querySelector('.right-button');
        this.images = items.querySelectorAll('img');
        console.log(this.rightButton.textContent);

        this.images.forEach((element, i) => {
            if (element.classList.value === 'current') this.current = i;
        });

        if (event.target === this.leftButton) {
            if (this.current > 0) this.current--

            if (this.current === 0) this.leftButton.textContent = '';
            if (this.current > 0) this.rightButton.textContent = '>';

            this.images.forEach(element => {
                element.classList.remove('current');
            })
            this.images[this.current].classList.add('current');

        } else if (event.target === this.rightButton) {
            if (this.current < this.images.length - 1) this.current++

            if (this.current === this.images.length - 1) this.rightButton.textContent = '';
            if (this.current < this.images.length - 1) this.leftButton.textContent = '<';

            this.images.forEach(element => {
                element.classList.remove('current');
            })
            this.images[this.current].classList.add('current');
        }

    }

}

let carousel = document.querySelector('.carousel');

carousel.addEventListener('click', () => {
    return new Carousel(carousel);
})

// carousel.querySelector('left-button').addEventListener('click', (event) => {
//     return new Carousel(event);
// })

// carousel.querySelector('right-button').addEventListener('click', (event) => {
//     return new Carousel(event);
// })

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/