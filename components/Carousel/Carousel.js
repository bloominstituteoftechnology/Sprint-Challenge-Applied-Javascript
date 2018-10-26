class Carousel {
    constructor(element) {
        this.element = element; 
        this.counter = 0;
        this.backBtn = document.querySelector('.left-button'); 
        this.nextBtn = document.querySelector('.right-button'); 
        this.nextBtn.addEventListener('click', () => this.nextImg());
        this.backBtn.addEventListener('click', () => this.previousImg());
    }
    nextImg() {
        this.element.style.display = 'none';
        let nextEl = this.element;
        console.log(nextEl)
        console.log(nextEl.nextElementSibling)
        while (this.counter >= 0 && this.counter < 4 && nextEl) {
            nextEl = nextEl.nextElementSibling;
        }
        nextEl.style.display = 'flex';
        
    }
    previousImg() {
        console.log(this.element)
        this.element.style.display = 'none';
        // console.log(this.element.previousElementSibling)
        this.element.previousElementSibling.style.display = 'flex'; 
    }
}


let carousel = document.querySelectorAll('.carousel img');
carousel[0].style.display = 'flex';
new Carousel(carousel[0]);


/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/