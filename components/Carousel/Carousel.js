class Carousel {
    constructor(element){
        this.element = element; //this is the carousel div.. 

        this.leftButton = this.element.querySelector('.left-button');
        this.leftButton.addEventListener('click',this.ClickLeft.bind(this));
        
        this.rightButton = this.element.querySelector('.right-button');
        this.rightButton.addEventListener('click',this.ClickRight.bind(this));

        this.images = carousel.querySelectorAll('img')
        this.currentIndex = 0;
        this.SetInitialPic();
        
    }
    SetInitialPic(){
        this.images[0].classList.toggle('imgShow');
    }
    ClickRight(){
        //this should increment the counter and set the image appropriately 
        this.images.forEach(element => {
            element.classList.remove('imgShow')
        });
        this.currentIndex = this.currentIndex +1;
        if(this.currentIndex>=this.images.length)
        {
            this.currentIndex = 0;
        }
        this.images[this.currentIndex].classList.add('imgShow');

    };
    ClickLeft(){
        //this should decrement the counter and set the image appropriately 
        this.images.forEach(element => {
            element.classList.remove('imgShow')
        });
        this.currentIndex = this.currentIndex -1;
        if(this.currentIndex<0)
        {
            this.currentIndex = this.images.length-1;
        }        
        this.images[this.currentIndex].classList.add('imgShow');
    };
}

let carousel = document.querySelector('.carousel'); 
carousel = new Carousel(carousel);



/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/


