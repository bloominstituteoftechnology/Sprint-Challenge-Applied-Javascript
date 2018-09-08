function makeCarousel() {
let index2 = 0;

    class Carousel {
constructor(element){
this.element = element;
this.rightBtn = document.querySelector(".right-button");
this.leftBtn = document.querySelector(".left-button");
this.images = document.querySelectorAll(".carousel img");

this.rightBtn.addEventListener("click",   () => {this.selectRight()});
this.leftBtn.addEventListener("click",   () => {this.selectLeft()});


}
selectRight() {
    if (index2 < 3) {
        index2 += 1;
    } else {
        index2 = 0;
    };
this.images.forEach(function(item) {
    item.style.display = "none"
});
this.images[index2].style.display = "flex";
}
selectLeft(){
    if (index2 > 0) {
        index2 -= 1;
    } else {
        index2 = 3;
    };
this.images.forEach(function(item) {
    item.style.display = "none"
});
this.images[index2].style.display = "flex"
}
}



let carousel = document.querySelectorAll(".carousel");


// Map over the array and convert each tab reference into a new TabLink object.  Pass in the tab object to the Tabs class.
carousel = Array.from(carousel).map(item => new Carousel(item));

//Once you are complete, call the .select method on the first tab
//carousel[0].select();
/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/


}

makeCarousel();