class Carousel {
  constructor(element) {
    this.element = element;
    this.leftButton = element.querySelector(".left-button");
    this.rightButton = element.querySelector(".right-button");
    this.images = element.querySelectorAll("img");
    this.changeLeft();
    //instead of keeping a current index, i decided to always keep the current index at 1 and manipulate the items around it.
    this.images[1].classList.add("active");
    this.rightButton.addEventListener("click", () => {
      this.changeRight();
    });
    this.leftButton.addEventListener("click", () => {
      this.changeLeft();
    });
  }//end constructor

  //updates the flex order of each image after being fed the array from either changeLeft or changeRight.
  updateFlexOrder(arr) {
    arr.forEach((image, index) => {
      image.style.order = index;
    });
    return (this.images = arr);
  }

  //removes the active class from all images, creates an array from images, pops the last item off the array, and unshifts it into the first spot in the array. calls updateFlexOrder on the rearranged array, and sets the active class on the current index 1.
  changeLeft() {
    this.images.forEach(image => {
      image.classList.remove("active");
    });
    let imagesArr = Array.from(this.images);
    let popped = imagesArr.pop();
    imagesArr.unshift(popped);
    this.updateFlexOrder(imagesArr);
    this.images[1].classList.add("active");
  };

  //does the opposite of changeLeft - shifts the first item out of the array and pushes it onto the end of the array before calling updateFlexOrder. Current image is still index 1. 
  changeRight() {
    this.images.forEach(image => {
      image.classList.remove("active");
    });
    let imagesArr = Array.from(this.images);
    let shifted = imagesArr.shift();
    imagesArr.push(shifted);
    this.updateFlexOrder(imagesArr);
    this.images[1].classList.add("active");
  }
}; //end class

let carousel = new Carousel(document.querySelector(".carousel"));


// /* If You've gotten this far, you're on your own! Although we will give you some hints:
//     1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
//     2. You will need to grab a reference to all of the images
//     3. Create a current index
//     4. Those buttons are gonna need some click handlers.
//     5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
//     6. Have fun!
// */
