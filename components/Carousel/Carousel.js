//Ignore this, I couldn't figure it out

//Carousel object
class Carousel {
    constructor(el){
        this.el = el;

        //grab the left and right buttons
        this.leftButton = this.el.firstElementChild;
        this.rightButton = this.el.lastElementChild;

        //reference to all imgs in carousel
        let images = document.querySelectorAll(".carousel img");
        //displays image when page is loaded
        const startImage = Math.floor(Math.random() * (images.length));
        let index = startImage;
        images[startImage].style.display = "block";

        //event listeners for button clicks
        this.leftButton.addEventListener("click", () => {this.advanceSlides(index, images)});
        this.rightButton.addEventListener("click", () => {this.advanceSlides(index, images)});
    }
    advanceSlides(index, images){
        //images 0 - 3


    //     console.log(index);
    //     if(event.target === this.leftButton) {
    //         images[index].style.display = "none";    
    //         if(index > 0){
    //         index = --index;
    //         console.log(index);
    //         images[index].style.display = "block"; 
    //         } else{
    //             index = 3;
    //             images[index].style.display = "block";
    //             console.log(index); 
    //         }
    //     }else {
    //         if(index < images.length - 1){
    //             index = ++index
    //             images[index].style.display = "block";
    //             console.log(index);
    //         }else{
    //             index = 0;
    //             images[index].style.display = "block";
    //             console.log(index); 
    //         }
    //     }          
    }
}

// class Slide {
//     constructor(el){
//       this.el = el;
//     }
//     advanceSlides(){
//         this.el.classList.add(".active-img");
//     }
//   }

//grab the Casousel
let carousel = document.querySelector(".carousel");
//assign it to the carousel object since it's a single element
carousel = new Carousel(carousel);
//reference to all imgs in carousel


//let images = document.querySelectorAll(".carousel img");
//displays image when page is loaded
//startImage = Math.floor(Math.random() * (images.length));
//images[startImage].style.display = "block";
//creates new object for each img
//images = Array.from(images).map(img => new Slide(img));

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