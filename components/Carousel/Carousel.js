class Carousel {
    constructor(mustafa) {
        this.mustafa = mustafa;
        this.leftButton = this.mustafa.querySelector('.left-button')
        this.rightButton = this.mustafa.querySelector('.right-button')
        this.img = this.mustafa.querySelectorAll(".carousel img")
        this.leftButton.addEventListener('click', () => {
            this.toggleMustafa()
        })
    }
    toggleMustafa() {
        this.leftButton.classList.toggole("left-button")
    }
    toggleInaya(){
        this.rightButton.classList.toggole("right-button")
    }
}
let skims = document.querySelectorAll(".carousel").forEach( skim =>{
    new Carousel (skim)
}

)


/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/