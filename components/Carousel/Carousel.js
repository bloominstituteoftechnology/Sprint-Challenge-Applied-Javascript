class Carousel {
    constructor(element){
        this.element = element;
        this.left = document.querySelector(`.left-button`);
        this.right = document.querySelector(`.right-button`);
        this.image = document.querySelectorAll(`img`);
        this.image[1].style.display = 'block';
        this.image[2].style.display = 'block';
        this.disp = [1,2];
        this.left.addEventListener('click', () => this.cycleLeft());
        this.right.addEventListener('click', () => this.cycleRight());
    }
    cycleLeft(){
        this.image.forEach(x => x.style.display = 'none');
        const count = Array.from(this.image).length;
        if(this.disp[0] > 0){
            this.disp[0] = this.disp[0] - 1; 
        }
        else{
            this.disp[0] = count;
        }
        this.disp[1] = this.disp[1] - 1;
        this.image[this.disp[0]].style.display = 'block';
        this.image[this.disp[1]].style.display = 'block';
        console.log('left');
    }
    cycleRight(){
        this.image.forEach(x => x.style.display = 'none');
        const count = Array.from(this.image).length;
        if(this.disp[1] < count){
            this.disp[1] += 1; 
        }
        else{
            this.disp[0] +=1;
        }
        this.disp[1] += 1;
        this.image[this.disp[0]].style.display = 'block';
        this.image[this.disp[1]].style.display = 'block';
        console.log('right');
    }
}


let carousel = document.querySelectorAll('.carousel').forEach(x => new Carousel(x));

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/