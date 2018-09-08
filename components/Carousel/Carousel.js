class Carousel {
   constructor(element){
    //assign element reference
    this.element = element;
    //assign reference to both left and right buttons
    this.leftButton = element.querySelector('.left-button');
    this.rightButton = element.querySelector('.right-button');
    //reference to grab all images
    this.img = element.querySelectorAll('.carousel img');
    //create an array of the images to loop through them
    this.arrImgs = Array.from(this.img);
    // console.log(this.arrImgs)
    //add click events for both buttons
    this.leftButton.addEventListener('click', () => {this.goLeft()});
    this.rightButton.addEventListener('click', () => {this.goRight()});
   }

   goLeft() {
      for(let i = 0; i < this.arrImgslength; i++){
       
          
      }
      console.log("Go Left")
   }

   goRight() {
       console.log("Go Right")
   }
}

let carousel = document.querySelectorAll('.carousel');
carousel = Array.from(carousel).map(items => new Carousel(items));
// console.log(carousel)



/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/