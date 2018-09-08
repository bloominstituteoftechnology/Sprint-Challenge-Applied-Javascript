class Carousel {
    constructor(element) {
        this.element = element;
        this.images = this.element.querySelectorAll('img');

        this.element.querySelector('.left-button').addEventListener('click', () => this.left());
        this.element.querySelector('.right-button').addEventListener('click', () => this.right());
    }

    right() {
        let imgArr = Array.from(this.images);
        Array.from(this.images).forEach((img, ind, arr) => ind === 0 ? imgArr.splice(arr.length - 1, 1, arr[0]) : ind === arr.length - 1 ? imgArr.splice(0, 1, arr[arr.length - 1]) : imgArr.splice(++ind, 1, arr[ind]));
        this.images.forEach(() => this.element.removeChild(this.element.querySelector('img')));
        imgArr.forEach(img => this.element.appendChild(img))
    }

    left() {
        let imgArr = Array.from(this.images);
        Array.from(this.images).forEach((img, ind, arr) => ind === 0 ? imgArr.splice(arr.length - 1, 1, arr[0]) : ind === arr.length - 1 ? imgArr.splice(0, 1, arr[arr.length - 1]) : imgArr.splice(--ind, 1, arr[ind]));
        this.images.forEach(() => this.element.removeChild(this.element.querySelector('img')));
        imgArr.forEach(img => this.element.appendChild(img))
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