class CarouselItem {
    constructor(element) {
        this.element = element;
    }

    select() {
        this.element.classList.add("Carousel_item-focused");
    }

    deselect() {
        this.element.classList.remove("Carousel_item-focused");
    }
}

class Carousel {
    constructor(element) {
        this.element = element;
        this.items = element.querySelectorAll(".carousel_item");
        this.items = Array.from(this.items).map(each => {
            return new CarouselItem(each);
        });

        let length = this.items.length;
        let i = 0;

        document.addEventListener('click', () => {
            if(event.target.dataset.arrow) {
                console.log("test");
                const data = event.target.dataset.arrow;
                console.log(data);

                if(data === "R") {
                    if(i < length - 1) i++;
                    else i = 0;
                    this.updateActive(this.items[i]);
                }

                if(data === "L") {
                    if(i >  0) i--;
                    else i = length - 1;
                    this.updateActive(this.items[i]);
                }
            }
        });

        this.active = this.items[i];
        this.init();
    }
    
    init() {
        this.active.select();
    }

    updateActive(newActive) {
        this.active.deselect();
        this.active = newActive;
        this.active.select();
    }
}

let carousels = document.querySelectorAll(".carousel");
carousels = Array.from(carousels).map(each => new Carousel(each)); 

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. Those buttons are gonna need some click handlers.
    3. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    4. Have fun!
*/