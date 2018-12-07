class Carousel {
  constructor(pic) {
    this.pic = pic;
    this.picData = this.pic.dataset.tab;
    this.pic[data-tab='1'].style.display = 'flex';
  }
}

let carousel = document.querySelector('.carousel').forEach((pic) => new Carousel(pic));


/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/