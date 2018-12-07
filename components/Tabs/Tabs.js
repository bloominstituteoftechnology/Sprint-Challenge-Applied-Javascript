class TabLink {
  constructor(tabElement){
    this.tabElement = tabElement;
    this.tabData = this.tabElement.dataset.tab; 
    if(this.tabData === 'all'){
      this.cards = document.querySelectorAll('.card');
    } else {
      this.cards = document.querySelectorAll(`.card[data-tab=${this.tabData}]`);
    }
    this.cards = Array.from(this.cards).map(currentCard => new TabCard(currentCard));
    this.tabElement.addEventListener('click', () => this.selectTab());
  }

  selectTab(){
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(currentItem => currentItem.classList.toggle('active-tab', false))
    const cards = document.querySelectorAll('.card');
    cards.forEach(nodeItem => nodeItem.style.display = 'none')
    this.tabElement.classList.toggle('active-tab');
    this.cards.forEach(card => card.selectCard());
  }
}

class TabCard {
  constructor(cardElement){
    this.cardElement = cardElement;
  }
  selectCard(){
    this.cardElement.style.display = "flex";
  }

}

let tabs = document.querySelectorAll('.tab').forEach(tab => new TabLink(tab));