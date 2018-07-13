class Carousel{
    constructor(containerID){
    this.container = document.getElementById(containerID) || document.body; 
    this.slides = this.container.querySelectorAll('.carousel');
    this.total = this.slides.length - 1; 
    this.current = 0; 
    this.slide(this.current); //This will start on slide 1. 
    }
    next (interval){
      (this.current === this.total) ? this.current = 0 : this.current += 1; 
  
      this.stop(); 
      this.slide(this.current); 
  
      if(typeof interval === 'number' && (interval % 1) === 0){
        let context = this; 
        this.run = setTimeout(function(){
          context.previous(interval);
        }, interval); 
      }
    }
    //previous 
    previous(interval){
      (this.current === this.total) ? this.current = 0 : this.current += 1; 
  
      this.stop(); 
      this.slide(this.current); 
  
      if(typeof interval === 'number' && (interval % 1) === 0){
        let context = this; //allows us to access current this inside of another function. 
        this.run = setTimeout(function(){
          context.previous(interval); 
        }, interval); 
      }
    }
    stop() {
      clearTimeout(this.run); 
    }
    slide (index){
      if(index >= 0 && index <= this.total) {
        this.stop();
        for (let i = 0; i <= this.total; i++){
          if (i === index) {
            this.slides[i].style.display = "inline-block";
          } else {
            this.slides[i].style.display = 'none'; 
          }
        }
      } else {
        alert("Index " + index + " doesn't exist. Available : 0 - " + this.total); 
      }
    }
}
// const carouselImages = new Carousel("images"); // Important time wasted not haivng ID
// // in here it won't show up



/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. Those buttons are gonna need some click handlers.
    3. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    4. Have fun!
*/