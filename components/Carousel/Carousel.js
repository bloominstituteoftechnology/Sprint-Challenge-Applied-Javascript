class Carousel {
    constructor(element){
        this.element = element;
        console.log(element);
        this.leftArrow = element.querySelectorAll('.left-button');
        console.log(leftArrow);
        this.rightArrow = element.querySelectorAll('.right-button');
        console.log(rightArrow);
        this.images= element.querySelectorAll('img');
        console.log(images);
        this.images.style.display

        this.imgages= Array.from(images).map(image => new Image(image));

        this.element.addEventListener('click', (event) =>
        this.selectArrow(event));

    }

selectArrow(event){

}

}

class Image{
    constructor(element){
        this.element = element;   
    }
    const image

}


let carousel = document.querySelectorAll('.carousel');
console.log(carousel);

let images= document.querySelectorAll('.carousel img');
console.log(images);

carousel = Array.from(carousel).map(carousels => {
    return new Carousel(carousels);
});


// images = Array.from(images).map(image => new Picture(image));


/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/