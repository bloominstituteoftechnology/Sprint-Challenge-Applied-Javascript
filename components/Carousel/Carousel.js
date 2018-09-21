class Carousel {
	constructor(img) {
		this.img = img;
		this.imgData = this.img.dataset.key;
		this.leftButton = document.querySelector('.left-button');
		this.rightButton = document.querySelector('.right-button');
		this.leftButton.addEventListener('click', () => this.shiftLeft());
		this.rightButton.addEventListener('click', () => this.shiftRight());
	}

	shiftLeft() {
		const imgs = document.querySelectorAll('.carousel img');
		imgs.forEach(img => img.style.display = 'none');
		if (this.imgData === '1') {
			
		} else {
			
		}
	};

	shiftRight() {

	}
}

let imgs = document.querySelectorAll('.carousel img');
imgs[0].style.display = 'block';
imgs = Array.from(imgs).map(img => new Carousel(img));

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
