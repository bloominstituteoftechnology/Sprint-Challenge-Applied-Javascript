class Carousel {
    constructor(element) {
        this.element = element;   

        this.left = this.element.querySelector('.left-button');
        this.right = this.element.querySelector('.right-button');

        
        this.images = document.querySelectorAll(`.image`);
        this.images = Array.from(this.images);
        console.log(this.images)
        this.index = 0
       
        
        this.left.addEventListener('click', () => this.select())
        this.right.addEventListener('click', () => this.select())
    }
         
    select() {
        
        
        if (this.index > 0 && this.index < 3) {
            this.images[this.index - 1].style.display = 'none'
            this.images[this.index].style.display = 'block';
            this.index += 1 
        }
        else if (this.index === 3) {
            this.images[this.index - 1].style.display = 'none';
            this.images[this.index].style.display = 'block';
            this.index -= 3
        }  
        else {
            this.images[this.index + 3].style.display = 'none';
            this.images[this.index].style.display = 'block';
            this.index += 1; 
        }
        console.log(this.images[this.index]);
    }
}

let carousel = document.querySelectorAll('.carousel');

//carousel = new Carousel
carousel = Array.from(carousel).map(part => new Carousel(part));




/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/