//Tried but failed, too confused :/
class Carousel {
    constructor(element){
    this.element = element;
    this.carousel = this.element.querySelectorAll(".carousel")
    this.next = this.element.querySelector(".right-button")
    this.prev = this.element.querySelector(".left-button")  
    this.images = this.element.querySelectorAll(".images")
    this.images = Array.from(this.images)
    this.counter = 0
    this.amount = images.length
    this.current = images[0]
    this.classList.add('active');  
    }

    navigate(direction) {
        this.current.classList.remove('current');
        counter = counter + direction;
        if (direction === -1 && 
            counter < 0) { 
          counter = amount - 1; 
        }
        if (direction === 1 && 
            !images[counter]) { 
          counter = 0;
        }
        current = items[counter];
        current.classList.add('current');
}
    this.next.addEventListener('click', () => {navigate(1)});
    this.prev.addEventListener('click', () => {navigate(-1)});
    navigate(0);
}

let carousel = $('.carousel').carousel('cycle');
carousel = Array.from(carousel).map( element => new Carousel(element));

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. Those buttons are gonna need some click handlers.
    3. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    4. Have fun!
*/