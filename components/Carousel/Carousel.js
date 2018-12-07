class Carousel {
    constructor(el) {
        this.el = el;
        this.index = 1;
        this.position = this.elemenet.dataset.position;
        this.left.addEventListener('click', () => this.leftClick())
        this.right.addEventListener('click', () => this.rightClick())
    }

    rightClick() {
        this.index += 1;
        if (this.index >= 5) {
            this.index = 1
        }
        this.element.querySelectorAll('.slider').forEach((cV) => {
            cV.classList.toggle('active-slider', false)
        })
        this.element.querySelector(`.slider[data-position='${this.index}']`).classList.toggle('active-slider', true)
    }
    leftClick() {
        this.index -= 1;
        if (this.index <= 0) {
            this.index = 4
        }
        this.element.querySelectorAll('.slider').forEach((cV) => {
            cV.classList.toggle('active-slider', false)
        })
        this.element.querySelector(`.slider[data-position='${this.index}']`).classList.toggle('active-slider', true)
    }

    let carousel = document.querySelector(".carousel");

    /* If You've gotten this far, you're on your own! Although we will give you some hints:
        1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
        2. You will need to grab a reference to all of the images
        3. Create a current index
        4. Those buttons are gonna need some click handlers.
        5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
        6. Have fun!
    */