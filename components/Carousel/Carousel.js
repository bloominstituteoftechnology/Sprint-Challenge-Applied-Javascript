class Carousel {
   constructor(el) {
        this.el = el;
        this.index = 0;
        this.left = document.querySelector('.left-button');
        this.right = document.querySelector('.right-button');
        this.imgs = this.el.querySelectorAll('img');
        // this.image = new Pictures(this.imgs);
        this.imgs[this.index].style.display = 'block';
        console.log(this.image);
        this.right.addEventListener('click', () => {this.rightClick()});
        this.left.addEventListener('click', () => {this.leftClick()});
        
        this.length = this.imgs.length;
        console.log(this.length);
       
   }
   
   rightClick() {
   	   this.index++;
   	   if(this.index>=this.length) {
   	   	  this.index = 0;
   	   }
   	   this.imgs[this.index].style.display = 'block';
   	   console.log(this.index);
   }
   leftClcik() {
   	 
   }
}

// class Pictures {
// 	constructor(element) {
// 		 this.element = element;
//     }

//     start() {
//     	this.element.forEach(image =>{
//     		 image.style.display = 'none';
//     	});
//     	this.element[this.index].style.display = 'block';
//     }
// }


let carousel = document.querySelector('.carousel');

carousel = new Carousel(carousel);
// console.log(carousel);
/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/