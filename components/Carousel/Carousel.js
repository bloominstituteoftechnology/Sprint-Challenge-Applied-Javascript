class Carousel {
    constructor (element) {
        this.element = element;

        this.left = this.element.querySelector('.left-button');
        this.left.addEventListener('click', () => {
            this.previous();
        });

        this.right = this.element.querySelector('.right-button');
        this.right.addEventListener('click', () => {
            this.next();
        });

        this.imgs = this.element.querySelectorAll('img');
        this.imgs = Array.from(this.imgs).map(img => new Image(img));
        this.startPos = 0
        this.active = this.imgs[this.startPos]
        this.active.selected();

    }

    next(){
        this.active.deselected();
        this.startPos += (this.startPos === 3 ? -3 : 1);
        this.active = this.imgs[this.startPos];
        this.active.selected();
    }

    previous(){
        this.active.deselected();
        this.startPos -= (this.startPos === 0 ? -3 : 1);
        this.active = this.imgs[this.startPos];
        this.active.selected();
    }
}

class Image {
    constructor (element) {
        this.element = element;
    }

    selected (){
        this.element.style.display = 'block';
    }

    deselected() {
        this.element.style.display = 'none';
    }
}

let carousels = document.querySelectorAll('.carousel');
carousels = Array.from(carousels).map(carousel => new Carousel(carousel))

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. Those buttons are gonna need some click handlers.
    3. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    4. Have fun!
*/

