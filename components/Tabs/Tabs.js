class TabLink {
  constructor(tabElement) {
    this.tabElement = tabElement;
    this.tabData = this.tabElement.dataset.tab;

    if (this.tabData === 'all') {
      this.cards = document.querySelectorAll('.tab');
    } else {
      this.cards = document.querySelectorAll(`.tab[data-tab='${this.tabData}']`);
    }

    this.cards = Array.from(this.cards).map(el => new TabCard(el));
    this.tabElement.addEventListener('click', () => { this.selectTab() });
  }

  selectTab() {
    const tabs = document.querySelectorAll('.tab');

    tabs.forEach(el => {
      el.classList.remove('active-tab');
    });

    const cards = document.querySelectorAll('.card');

    cards.forEach(el => {
      el.style.display = 'none';
    });

    this.tabElement.classList.add('active-tab');
    this.cards.forEach(card => card.selectCard());
  }
}

class TabCard {
  constructor(cardElement) {
    this.cardElement = cardElement;
    // console.log(this.cardElement);
  }

  selectCard() {
    console.log(this.cardElement.style);
    this.cardElement.style.display = 'flex';
  }
}

let tabs = document.querySelectorAll('.tab').forEach(el => new TabLink(el));