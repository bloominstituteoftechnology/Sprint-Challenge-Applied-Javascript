class Carousel {
    constructor(item){
        this.item = item;
        console.log(this.item);

        this.leftButton = document.querySelector('.left-button');
        this.rightButton = document.querySelector('.right-button');
        console.log(this.leftButton);
        console.log(this.rightButton);

        this.imgs = document.querySelectorAll('.carousel img');
        console.log(this.imgs);

        this.imgs = Array.from(this.imgs).map((item, index) => new CurrentPhoto(item, index));
        console.log(this.imgs);
        
        this.rightButton.addEventListener('click', () => this.selectRight());
    }
    selectRight(){
        const imgs = document.querySelectorAll('.carousel img');

        imgs.forEach(item => {
            return item.style.display = 'none';
        });

        this.imgs.right();
    }

}

class CurrentPhoto{
    constructor(item, index){
        this.item = item;
        this.index = index;
    }
    right(){
        
        console.log(this.item);

        // const imgs = Array.from(document.querySelectorAll('.carousel img'));
        // console.log(imgs);
        // // imgs.style.display = 'none';

        // imgs[this.index].style.display = 'none';

        // let

        // let lastIndex = this.index - 1;
        // console.log(lastIndex);

        // let last;
        // if(lastIndex === -1){
        //     last = imgs[imgs.length - 1];
        // }else if(lastIndex >= 0){
        //     last = imgs[lastIndex];
        // }
        // console.log(last);



        // last.style.display = "none";
        // this.item.style.display = 'block';
        
    }
}



/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

let carousel = document.querySelectorAll('.carousel');
carousel = Array.from(carousel).map( item => new Carousel(item) );
console.log(carousel);