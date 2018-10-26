class Carousel {
    constructor(element){
        this.element = element;
        this.lButton = document.querySelector('.carousel .left-button')
        this.rButton = document.querySelector ('.carousel .right-button');
        this.imgs = document.querySelectorAll('.carousel img');
        this.imgs = Array.from(this.imgs)
        this.start = document.querySelector('.active-img');
        this.current = this.imgs[0];
        this.start.style.display = 'block';
        console.log(this.imgs)

        console.log(this.lButton)
        console.log(this.rButton)
        this.lButton.addEventListener('click',()=>this.leftClick())
        this.rButton.addEventListener ('click',()=>this.rightClick());

        
    }
    leftClick(){
        console.log(this.start)
        this.current.classList.remove('.active-img')
        console.log (this.start);

    }
    rightClick() {
        console.log('right')
    }


}
let carousel= document.querySelectorAll('.carousel');

// Map over the array and convert each tab reference into a new TabLink object.  Pass in the tab object to the Tabs class.  After you finish this line of code, it's time to build out your TabLink class at the top of the page!
carousel = new Carousel(carousel);

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/