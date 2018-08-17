class Carousel {
	constructor(carl) {
		this.carl = carl;
		this.buttons = this.carl.querySelectorAll('.btns');
		let btnAr = Array.from(this.buttons);
		btnAr[0].addEventListener('click', () => {this.goLeft() });
		btnAr[1].addEventListener('click', () => {this.goRight() });

		this.pics = this.carl.querySelectorAll('.car-pic');
		let picAr = Array.from(this.pics);
		console.log(picAr.length);
		picAr[0].classList.add('img-show');

	}
	goLeft() {
		this.pics = this.carl.querySelectorAll('.car-pic');
		let picAr = Array.from(this.pics);

		picAr.forEach(function(pic){
			pic.classList.remove('img-show')
		})
	};
	goRight(){
		alert('right!')
	};
}



let carousel = document.querySelectorAll('.carousel');
carousel = Array.from(carousel).map(car => new Carousel(car));




/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

