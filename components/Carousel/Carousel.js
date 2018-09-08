//Ignore this, I couldn't figure it out

class Carousel {
    constructor(el){
        this.el = el;

        this.leftButton = this.el.firstElementChild;
        this.rightButton = this.el.lastElementChild;

        this.leftButton.addEventListener("click", () => {
            this.advanceSlides();
          });
        this.rightButton.addEventListener("click", () => {
        this.advanceSlides();
        });
    }
    advanceSlides(){
        const images = document.querySelectorAll(".carousel img");
        images.forEach( img => {img.style.display = "none"});
    
        this.el.classList.add(".active-img");
    }
}
// class Slides {
//     constructor(el){
//       this.el = el;
//     }
//     advanceSlides(){
//         const images = document.querySelectorAll(".carousel img");
//         images.forEach( img => {img.style.display = "none"});
    
//         this.element.classList.add(".active-img");
//     }
//   }

let carousel = document.querySelector(".carousel");

carousel = new Carousel(carousel);

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    create object

    2. You will need to grab a reference to all of the images
    docQuerySelAll("img")

    3. Create a current index
    current class in CSS?

    4. Those buttons are gonna need some click handlers.
    addEventListener("click", () =>)

    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/