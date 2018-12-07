class Carousel {
    constructor(carousel){
        this.rightBtn = document.querySelector(".right-button");
        this.leftBtn = document.querySelector(".left-button");
        this.slides = document.querySelectorAll('.caro-img');

        this.rightBtn.addEventListener('click', ()=>{this.plusSlides(1)});
        this.leftBtn.addEventListener('click', ()=>{this.plusSlides(-1)});
        this.slideIndex = 1;
        this.showSlides(this.slideIndex);
    }
    plusSlides(n){
        this.showSlides(this.slideIndex += n);
    }
    currentSlide(n){
        showSlides(slideIndex = n);
    }
    showSlides(n){
        let i;
        let slides = document.querySelectorAll(".caro-img");
        if (n > slides.length) {this.slideIndex = 1} 
        if (n < 1) {this.slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none"; 
        }
        slides[this.slideIndex-1].style.display = "block";  
    }
 }
 






/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
const carousel = document.querySelector(".carousel");

new Carousel(carousel);