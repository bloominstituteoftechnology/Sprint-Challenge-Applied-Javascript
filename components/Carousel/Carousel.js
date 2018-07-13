class Carousel {
	constructor(element){
		this.element = element;
		this.pictures = this.element.querySelectorAll('.picture');
		this.pictures = Array.from(this.pictures).map( picture => {
		  return new Picture(picture);
		});
		console.log(this.pictures);
		this.state = 0;
		this.leftPointer = this.element.querySelector('.left-pointer');
		this.leftPointer.addEventListener('click', () => {
			if (this.state < 1){
				this.state += this.pictures.length-1;
			} else {
				this.state -= 1;
			}
			this.updateActive(this.pictures[this.state]);
		});
		this.rightPointer = this.element.querySelector('.right-pointer');
		this.rightPointer.addEventListener('click', () => {
			if (this.state >= this.pictures.length - 1){
				this.state = 0
			} else {
				this.state += 1;
			}
			this.updateActive(this.pictures[this.state]);
		});
		this.activePicture = this.pictures[this.state];
		this.init();
	}

	init() { 
	 	this.activePicture.makeVisible();
	}

	updateActive(newActive) {
	 	this.activePicture.makeHidden();
	 	this.activePicture = newActive;
	 	this.activePicture.makeVisible();
	}
}

class Picture {
	constructor(picture){
		this.picture = picture;
	}

	makeVisible(){
		this.picture.classList.add('active-picture');
	}
	makeHidden(){
		this.picture.classList.remove('active-picture');
	}
}


let carousel = document.querySelectorAll('.carousel');

carousel = Array.from(carousel).map(carousel => new Carousel(carousel));

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. Those buttons are gonna need some click handlers.
    3. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    4. Have fun!
*/