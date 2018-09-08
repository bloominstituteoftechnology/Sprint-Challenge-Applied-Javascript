// This is where we configure the code and bring it back to Tab.js

class TabLink {
	constructor(el){
		this.el = el;
		this.tabData = this.el.dataset.tab;

		if(this.tabData === 'all'){
			this.cards = document.querySelectorAll('.card');
		} else {
			this.cards = document.querySelectorAll(`.card[data-tab="${this.tabData}"]`);
		}

		this.cards = Array.from(this.cards).map(card => new TabCard(card));
		this.el.addEventListener('click', () => {
			this.selectTab();
		});
	}

	selectTab(){
		let tabs = document.querySelectorAll('.tab');

		tabs.forEach(tab => {
			tab.classList.remove('.active-tab')
		})

		let cards = document.querySelectorAll('.card');

		cards.forEach(card => card.style.display = 'none');

		this.el.classList.add('active-tab');

		this.cards.forEach(card => card.selectCard());
	}
}

class TabCard {
	constructor(el){
		this.el = el;
	}

	selectCard(){
		this.el.style.display = null;
	}
}

let tabs = document.querySelectorAll('.tab');

tabs = Array.from(tabs).map(tab => new TabLink(tab));


tabs[0].selectTab(); // Is this needed?????



