class Carousel {
    constructor(CarouselElement) {
        this.CarouselElement = CarouselElement;
        this.lButton = this.CarouselElement.querySelector('.left-button');// grabs the left button from the carousel object
        this.rButton = this.CarouselElement.querySelector('.right-button');// grabs the right button from the carousel object
        this.imgs = this.CarouselElement.querySelectorAll('img');// grabs all the imgs from the carousel object and puts them into an array like object
        this.index = this.imgs[0]; //sets the default value of this.index to the very first index of the imgs array like object
        this.length = this.imgs.length; //gets the length of the imgs array like object
        this.counter = 0; //var used to store the position in the array we are in
        this.lButton.addEventListener('click', (e) => this.changeIndex(-1));//Event listener on the left button that fires on clicking it
        this.rButton.addEventListener('click', (e) => this.changeIndex(1));//Event listener on the right button that fires on clicking it
    }
    //method used to change which image is being displayed in the carousel
    changeIndex(direction){

        this.index.classList.remove('current');
        this.counter = this.counter + direction; //sets the place we are going in the array to the direction
        //console.log(`Before the change:${this.counter}`);
        //if the direction is = to -1 (left button click) and the counter is greater than 0 sets counter = to the last spot of the array
        if (direction === -1 && 
            this.counter < 0) { 
            this.counter = this.length - 1; 
        }
        //if the direction is = to 1 (right button click) and counter is not equal to the an index in the array sets counter to 0 to access the first spot in the array
        if (direction === 1 && 
            !this.imgs[this.counter]) { 
            this.counter = 0;
        }
        this.index = this.imgs[this.counter]; //sets the current index to what the counter is set to
        this.index.classList.add('current');

        //animation for if left button or right button were clicked
        if(direction === 1){
            TweenMax.from(this.index, .5, {x: -1500, clearProps:"x"});
            // console.log(`After the change:${this.counter}`);
            // console.log(this.imgs[this.counter]);
        } else {
            TweenMax.from(this.index, .5, {x: 1500, clearProps:"x"});
            // console.log(`After the change:${this.counter}`);
            // console.log(this.imgs[this.counter]);
        }
    }
}

//References the carousel and makes it a new carousel object
let carousel = document.querySelectorAll('.carousel').forEach(car => new Carousel(car));


/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/