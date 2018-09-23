class Carousel {
    constructor(element){
        this.element = element;
        this.currentPic = 0;
        this.imgs = this.element.querySelectorAll('img');
        this.maxPicNum = this.imgs.length;
        this.imgs[this.currentPic].style.display = "block";
      
        this.init();
     
        this.element.querySelector('.left-button').addEventListener('click', () => this.leftClicked());
        this.element.querySelector('.right-button').addEventListener('click', () => this.rightClicked());
    }

    init(){
           }

    rightClicked() {
        let newNum = this.currentPic + 1;
        if (newNum == this.maxPicNum )
            newNum = 0;
        this.display(newNum, this.currentPic);
        this.currentPic = newNum;      
       
      }

    leftClicked(){
        let newNum = this.currentPic - 1;
        if (newNum == -1 )
            newNum = this.maxPicNum - 1;
        this.display(newNum, this.currentPic);
        this.currentPic = newNum;   

      }

    display(newNum, currentNum){
    this.imgs[currentNum].style.display = 'none';
    this.imgs[newNum].style.display = "block";
 
    }

}

let carousel = document.querySelector('.carousel');
carousel = new Carousel(carousel);

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

