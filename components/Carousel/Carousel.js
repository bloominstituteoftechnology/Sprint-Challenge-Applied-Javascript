class Carousel {
	constructor(carl) {
		this.carl = carl;
		this.buttons = this.carl.querySelectorAll('.btns');
		let btnAr = Array.from(this.buttons);
		btnAr[0].addEventListener('click', () => {this.goLeft() });
		btnAr[1].addEventListener('click', () => {this.goRight() });

		this.pics = this.carl.querySelectorAll('.car-pic');
		let picAr = Array.from(this.pics);
		picAr[0].classList.add('img-show');
	}
	goLeft() {
		this.pics = this.carl.querySelectorAll('.car-pic');
		let picAr = Array.from(this.pics);

		let imgIndex;

		for(let i = 0; i < 4; i++){
			if(picAr[i].classList.value.indexOf('img-show') !== -1){
				imgIndex = picAr.indexOf(picAr[i]);
			}
		}
		
		switch (imgIndex){
			case 0:
				picAr[0].classList.remove('img-show');
				picAr[3].classList.add('img-show');
			break;
			case 1:
				picAr[1].classList.remove('img-show');
				picAr[0].classList.add('img-show');
			break;
			case 2:
				picAr[2].classList.remove('img-show');
				picAr[1].classList.add('img-show');
			break;
			case 3:
				picAr[3].classList.remove('img-show');
				picAr[2].classList.add('img-show');
			break;
		}
	};
	goRight(){
		this.pics = this.carl.querySelectorAll('.car-pic');
		let picAr = Array.from(this.pics);

		let imgIndex;

		for(let i = 0; i < 4; i++){
			if(picAr[i].classList.value.indexOf('img-show') !== -1){
				imgIndex = picAr.indexOf(picAr[i]);
			}
		}
		
		switch (imgIndex){
			case 0:
				picAr[0].classList.remove('img-show');
				picAr[1].classList.add('img-show');
			break;
			case 1:
				picAr[1].classList.remove('img-show');
				picAr[2].classList.add('img-show');
			break;
			case 2:
				picAr[2].classList.remove('img-show');
				picAr[3].classList.add('img-show');
			break;
			case 3:
				picAr[3].classList.remove('img-show');
				picAr[0].classList.add('img-show');
			break;
		}
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

