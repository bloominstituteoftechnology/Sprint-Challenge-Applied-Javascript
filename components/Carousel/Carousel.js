class Carousel {
    constructor(carousel){
        this.carousel = carousel;
        this.leftBtn = document.querySelector('.left-button');
        this.rightBtn = document.querySelector('.right-button');
        this.imgs = Array.from(document.querySelectorAll('.c-img'));
        let index = 0;
        this.imgs[0].style.display = "block";
        console.log(carousel);
        console.log(this.rightBtn);
        console.log(this.leftBtn);
        console.log(this.imgs);
        this.rightBtn.addEventListener('click', () => {
            if(index < 3){
                this.imgs[index].style.display = "none";
                index += 1;
                TweenMax.from(this.imgs[index], 2, {y: "100%", x: "-100%", zIndex: 0, opacity: 0});
                TweenMax.to(this.imgs[index], 2, {y: "0", x: "0%", zIndex: -1, opacity: 1});
                this.imgs[index].style.display = "block";
                console.log(this.imgs[index]);
            }
        });
        this.leftBtn.addEventListener('click', () => {
            if(index > 0 && index <= 3){
                this.imgs[index].style.display = "none";
                index -= 1;
                TweenMax.from(this.imgs[index], 1, {y: "100%", x: "100%", zIndex: 0, opacity: 0});
                TweenMax.to(this.imgs[index], 1, {y: "0%", x: "0%", zIndex: -1, opacity: 1});
                this.imgs[index].style.display = "block";
                console.log(this.imgs[index]);
            }
        });
    }
}

new Carousel(document.querySelector('.carousel'));

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/