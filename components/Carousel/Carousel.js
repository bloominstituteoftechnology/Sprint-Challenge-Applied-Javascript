class Carousel {
    constructor(items) {
        this.items = items;
        this.current = 0;
        this.load = true;

        this.leftButton = this.items.querySelector('.left-button');
        this.rightButton = this.items.querySelector('.right-button');
        this.images = this.items.querySelectorAll('img');

        this.leftButton.addEventListener('click', () => { this.leftClick() });
        this.rightButton.addEventListener('click', () => { this.rightClick(event) });
        console.log('beginning')
    }

    leftClick() {
        console.log('there')
        if (this.current > 0) this.current--;
        if (this.load = true) this.load = false;
        if (this.images[this.current]) {
            this.images[this.current].classList.add('current');
            this.images[this.current + 1].classList.remove('current');
        }
    }

    rightClick() {
        console.log('here')
        if (this.current < this.images.length - 1) this.current++;
        if (this.load = true) this.load = false;
        if (this.images[this.current]) {
            this.images[this.current].classList.add('current');
            this.images[this.current - 1].classList.remove('current');
        }

    }

}

const carousel = new Carousel(document.querySelector('.carousel'));

console.log(carousel)
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

// if (event.target === this.leftButton) {
//     if (this.current > 0) this.current--

//     if (this.current === 0) this.leftButton.textContent = '';
//     if (this.current > 0) this.rightButton.textContent = '>';


//     this.images.forEach(element => {
//         element.classList.remove('current');
//     })

//     if (this.current < this.images.length - 1) this.images[this.current].classList.remove('image-gone');
//     if (this.current > 0) this.images[this.current - 1].classList.add('image-gone');

//     setTimeout(() => {
//         this.images[this.current].classList.add('current');
//     }, 2000)


// } else if (event.target === this.rightButton) {
//     if (this.current < this.images.length - 1) this.current++

//     if (this.current === this.images.length - 1) this.rightButton.textContent = '';
//     if (this.current < this.images.length - 1) this.leftButton.textContent = '<';

//     if (this.current > 0) this.images[this.current - 1].classList.add('image-gone');

//     // this.images.forEach(element => {
//     //     element.classList.remove('current');
//     // })

//     if (this.images[this.current].classList.value === 'image-gone') this.images[this.current].classList.remove('image-gone');




//     this.images[this.current].classList.add('current');


// }