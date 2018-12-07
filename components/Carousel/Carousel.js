class Carousel {
    constructor(carousel) {
        this.carousel = carousel;
        console.log(this.carousel);

        this.leftBtn = this.carousel.querySelector(".left-button");
        console.log(this.leftBtn);

        this.rightBtn = this.carousel.querySelector(".right-button");
        console.log(this.rightBtn)

        this.carouselImgs = this.carousel.querySelectorAll("img");
        console.log(this.carouselImgs);

        this.index = []; 
        
        this.carouselImgs.forEach((img, index) => this.index.push(index));
        console.log(this.index);

        this.currentImg = this.carouselImgs[0];

        this.currentImg.style.display = "block";

       this.rightBtn.addEventListener("click", () => nextImg());
       this.leftBtn.addEventListener("click", () => previousImg());

    }

    nextImg() {
        this.currentImg = this.currentImg.nextElementSibling;
    }

    previousImg() {
        
    }
}



/* If You've gotten this far, you're on your own! Although we will give you some hints:
    DONE 1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons

    DONE 2. You will need to grab a reference to all of the images

    3. Create a current index

    4. Those buttons are gonna need some click handlers.

    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    
    6. Have fun!
*/

let carousel = document.querySelectorAll(".carousel").forEach(carousel => new Carousel(carousel));
