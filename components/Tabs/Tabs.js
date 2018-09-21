class TabLink {
    constructor(element) {
            this.element = element;
            this.tabData = this.element.dataset.tab;

            if (this.tabData === 'all') {
                this.cards = document.querySelectorAll(`.card`);
            } else {
                this.cards = document.querySelectorAll(`.card[data-tab='${this.tabData}']`);
            };

            console.log(this.cards);
            this.cards = Array.from(this.cards).map(card => new TabCard(card));
            //eventlistener
            this.element.addEventListener('click', () => {
                this.selectTab();
            })
        }
        //method
    selectTab() {
        const tabs = document.querySelectorAll('.tab');
        Array.from(tabs).forEach(function(tab) {
            tab.classList.remove("active-tab");
        });
        this.element.classList.add("active-tab");
        const cards = document.querySelectorAll('.card');
        Array.from(cards).forEach(function(card) {
            card.style.display = "none";
        });
        this.cards.forEach(card => card.selectCard());
    }
}

class TabCard {
    constructor(element) {
        this.element = element;
    }
    selectCard() {
        this.element.style.display = null;
    }

}

let tabs = document.querySelectorAll(".tab");
tabs = Array.from(tabs).map(link => new TabLink(link));

tabs[0].selectTab();