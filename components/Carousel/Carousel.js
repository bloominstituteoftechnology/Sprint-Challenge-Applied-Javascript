class Carousel {
    constructor(element){
        this.element = element;
        this.leftButton = this.element.querySelector('.left-button');
        this.rightButton = this.element.querySelector('.right-button');
        // create a reference to all the ".tab" classes
        this.pic = this.element.querySelectorAll('.pic');
        // Notice that we are passing a new tab AND a reference to Tabs by using "this"
        this.pic = Array.from(this.pic);
        // Assign activeTab to the first item in the tabs array
        this.activePic = this.pic[0];
        // init is simply calling a custom method named init(), nothing to do here
        this.init();
      }  
}

// Create a reference to ".tabs"
let carousel = document.querySelectorAll('.carousel');
console.log(document.querySelectorAll('.carousel'));
// Map over the array and convert each tab reference into a new Tabs object.  Pass in the tab object to the Tabs class.
carousel = Array.from(carousel).map( param => new Carousel(param) );
//let carousel = $();


/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. Those buttons are gonna need some click handlers.
    3. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    4. Have fun!
*/