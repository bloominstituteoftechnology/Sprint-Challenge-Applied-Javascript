class Carousel {
  constructor(clicker) {
    this.clicker = clicker;
    this.tabpicked = this.clicker.dataset.tab;
    if (this.tabpicked === "a") {
      this.picL = document.querySelectorAll(`.carousel[data-tab='${this.tabpicked}']`);
      for (let i = 0; i < this.picL.length; i++); //where the array.length ls the array /node value of the img data tab list.
      this.pic = this.picL;
      this.pic = Array.from(this.pic).map(create => new (create));
    } else if (this.tabData === "z") {
      this.picR = document.querySelectorAll(`.carousel[data-tab='${this.tabpicked}']`);
      for (let i = this.picR.length - 1; i < this.picR.length; i--);
      this.pic = this.PicR;
      this.pic = Array.from(this.pic).map(create => new (create));

    } else
    console.log("Error pleas fix your code. in If else statement.");

    this.clicker.addEventListener('click', e => this.clickSelect(e););
    
  }

}
let banana = [a,z];
let carousel = document.querySelectorAll(`.carousel[data-bin="${banana}"]`);
carousel = Array.from (carousel).map(it => new Carousel(it););
/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
console.log('Looking At:', );
console.log('A type of: ', typeof );
