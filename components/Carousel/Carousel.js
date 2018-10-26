class Carousel {
    constructor(element) {
        this.element = element;

        this.right = this.element.querySelector('.right-button');
        this.left = this.element.querySelector('.left-button');

        this.images = this.element.querySelectorAll('.carousel img');

        this.index = 0;
        this.images[this.index].style.display = "block";

        this.right.addEventListener('click', () => (this.rightClick()));
        this.left.addEventListener('click', () => (this.leftClick()));


    }
    // clickSides(n) {
    //     if (this.element == right) {
    //         showSlides(index += n)
    //     } else {
    //         showSlides(index -= n)
    //     };
    //     console.log('click');
    // }

    // plusSlides(n) {
    //     this.showSlides(index += n);
    // }

    // showSlides(n) {
    //     if (n > images.length) {
    //         index = 1
    //     };
    //     if (n < 1) {
    //         index = images.length
    //     };
    //     for (let i=0; i<images.length; i++) {
    //         images[i].style.display = "none";
    //     };
    //     images[index-1].style.display = "block";
    // }

    leftClick() {
        this.images.forEach(element => element.style.display = "none");
        this.index -1 < 0 ? this.images[this.images.length-1].style.display = "block" : this.images[this.index-1].style.display = "block";
        this.index - 1 < 0 ? this.index = this.images.length - 1 : this.index --;
    }

    rightClick() {
        this.images.forEach(element => element.style.display = 'none');
        this.index +1 > this.images.length -1 ? this.images[0].style.display = "block" : this.images[this.index+1].style.display = "block";
        this.index + 1 > this.images.length -1 ? this.index = 0 : this.index ++;
        // TweenLite.to(this.element, 3, {className: "img", ease:Power1.easeOut});
    }

}

let carousel = document.querySelectorAll('.carousel');

carousel = carousel.forEach(element => new Carousel(element));

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/