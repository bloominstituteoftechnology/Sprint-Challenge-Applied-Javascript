class Carousel {
    constructor(element){
        this.element = element;
        this.left = document.querySelector('.left-button');
        this.right = document.querySelector('.right-button');
        this.index = 0;
        this.pics = document.querySelectorAll('.caro');
        this.buttons = document.querySelectorAll('.btn');

        
        this.buttons.forEach(btn => btn.addEventListener('click', (e) => {
            let idx = e.target.textContent 
            idx === '<' ? this.index-- : this.index++;
            if( this.index === -1) this.index = 3;
            if( this.index === 4) this.index = 0;

            this.pics.forEach(pic => pic.classList.remove('show'));
            this.pics[this.index].classList.add('show');
            })
        )
    }
}

const carousel = document.querySelector(".carousel");
new Carousel(carousel);
/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/