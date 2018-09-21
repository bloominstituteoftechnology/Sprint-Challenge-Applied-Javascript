class TabLink {
  constructor(element){
    this.element = element;
    this.tabData = this.element.dataset.tab; 

    if(this.tabData === 'all'){
      this.cards = document.querySelectorAll('.card');
    } else {
      this.cards = document.querySelectorAll(`.card[data-tab='${this.tabData}']`);;
    } 

    this.cards = Array.from(this.cards).map(n => new TabCard(n));
    this.element.addEventListener('click', e => this.selectTab(e));
  }

  selectTab(){
    console.log('here');
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(n => n.classList.remove('active-tab'))
    this.element.classList.add('active-tab');

    const cards = document.querySelectorAll('.cards');
    cards.forEach(n => n.style.display = 'none')
    this.cards.forEach(card => card.selectCard());
  }
}

class TabCard {
  constructor(element){
    // Assign this.element to the passed in element.
    this.element;
  }
  selectCard(){
    // Update the style of this.element to display = null
    this.element;
  }

}

// Create a reference to all ".tab" classes
let tabs = document.querySelectorAll('.tab');
// Map over the array and convert each tab reference into a new TabLink object.  Pass in the tab object to the Tabs class.
tabs = Array.from(tabs).map(n => new TabLink(n));

//Once you are complete, call the .select method on the first tab