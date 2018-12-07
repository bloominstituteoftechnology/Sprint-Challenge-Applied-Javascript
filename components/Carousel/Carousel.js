class Carousel {
    constructor(carousel){
        // Right Button
        this.rightBtn = document.querySelector(".right-button");
        // Left Button
        this.leftBtn = document.querySelector(".left-button");
        //Slides
        this.slides = document.querySelectorAll('.caro-img');
        //Button Events
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
            TweenMax.to(slides[i], 0, {
                display:'none',
                opacity: '.4'
            })
            // slides[i].style.display = "none"; 
        }
        TweenMax.to(slides[this.slideIndex-1], 1.5, {
            display: "block",
            opacity: '1'
        })
        // slides[this.slideIndex-1].style.display = "block";  
    }
 }

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoent. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
const carousel = document.querySelector(".carousel");

new Carousel(carousel);