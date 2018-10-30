class TabLink {
    constructor(tabElement) {

        this.tabElement = tabElement;
        this.tabData = this.tabElement.dataset.tab;

        // Check to see if this.tabData is equal to 'all'
        this.tabData === 'all' ? this.cards = document.querySelectorAll('.card') : this.cards = document.querySelectorAll(`.card[data-tab='${this.tabData}']`);

        // Convert to Array and TabCard objects
        this.cards = Array.from(this.cards).map(card => new TabCard(card));

        // Click Events
        this.tabElement.addEventListener('click', () => this.selectTab());
    }

    selectTab() {

        const tabs = document.querySelectorAll('.tab');

        tabs.forEach(tab => tab.classList.remove('active-tab'));

        const cards = document.querySelectorAll('.card');

        cards.forEach(card => card.style.display = 'none');


        this.tabElement.classList.toggle('active-tab');

        this.cards.forEach(card => card.selectCard());
    }
}

class TabCard {
    constructor(cardElement) {

        this.cardElement = cardElement;
    }
    selectCard() {

        this.cardElement.style.display = 'flex';
    }

}

// Initial DOM Reference
let tabs = document.querySelectorAll('.tab');

tabs = Array.from(tabs).map(tab => new TabLink(tab));