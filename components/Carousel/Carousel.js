class ChangeSlides {
    constructor(domElement) {
      this.domElement = domElement
      this.lButton = document.querySelector('.left-button')
      this.rButton = document.querySelector('.right-button')
      this.count = 0;
      this.images = document.querySelectorAll('.carousel img')
      
      this.images = Array.from(this.images);
      
      this.lButton.addEventListener('click', () => this.prevSlide());
      this.rButton.addEventListener('click', () => this.nextSlide());
    }
    nextSlide() {
      if(this.count < this.images.length -1) {
      this.count++
      const images = document.querySelectorAll('.carousel img');
      images.forEach(element => element.classList.remove('next-button'));
      this.images[this.count].classList.add('next-button')
      }
    }
    
    prevSlide() {
      if(this.count > 0) {
      this.count--
      const images2 = document.querySelectorAll('.carousel img');
      images2.forEach(element => element.classList.remove('next-button'));
      this.images[this.count].classList.add('next-button')
      }
    }
   }
  
  
  let images = document.querySelectorAll('.carousel img').forEach(images => new ChangeSlides(images));
  

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/