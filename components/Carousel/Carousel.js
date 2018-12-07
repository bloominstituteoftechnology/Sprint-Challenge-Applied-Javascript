let index = 0;
// console.log('start' + index)
class Carousel {
    constructor(item){
        this.item = item;
        // console.log(this.item)
        
        const img = document.querySelectorAll('.carousel img');
        // let imgArr  = Array.from(img);
        // const arrLength = imgArr.length;

        

        if(this.item.style.display = 'none'){
            img[index].style.display = 'flex';
        }

        lBtn.addEventListener('click', () => this.moveLeft());
        rBtn.addEventListener('click', () => this.moveRight());
    }

    moveLeft() {
        index--;
        // console.log('left' + index);
        this.setImg();
    }
    moveRight() {
        index++;
        // console.log('right' + index);
        this.setImg();
    }

    setImg(){
        let carouselImgs = Array.from(document.querySelectorAll('.carousel img'));
        // console.log(carouselImgs.length-1)
        if(index > carouselImgs.length){
            index = 0;
        }else if(index < 0){
            index = carouselImgs.length;
        }
        carouselImgs.forEach( item => item.style.display = 'none');
        carouselImgs[index].style.display = 'flex';
    }
}

const lBtn = document.querySelector('.left-button');
const rBtn = document.querySelector('.right-button');
const carousel = document.querySelector('.carousel');

let carouselImgs = Array.from(document.querySelectorAll('.carousel img'));
carouselImgs.forEach(item => new Carousel(item));

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/