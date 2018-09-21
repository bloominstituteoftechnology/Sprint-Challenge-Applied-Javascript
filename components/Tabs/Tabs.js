class TabLink {
  constructor(element){

    this.element = element;

    this.tabData = this.element.dataset.tab; 
    this.corespondingCards = [];
    this.otherCards =[];
    
    cards.forEach(x =>{
      if (this.tabData === 'all'){
        this.corespondingCards = cards;
      }
      if (x.element.dataset.tab === this.tabData){
        this.corespondingCards.push(x);
      }
      else{
        this.otherCards.push(x);
      }
    });

    this.element.addEventListener('click', () => this.selectTab())
  }

  selectTab(){
    if (this.element.classList.contains('active-tab')){
      tabs[0].selectTab();
      return;
    }
    this.element.classList.toggle('active-tab');
    tabs.forEach(x =>{
      if (x.element !== this.element){
        x.element.classList.remove('active-tab')
      }
    })
    this.otherCards.forEach(x => {
      if (!(x.element.classList.contains('card-unselected'))){
        x.element.classList.toggle('card-unselected')
    }
    this.corespondingCards.forEach(x => x.element.classList.remove('card-unselected'))
    })
  }
}

class TabCard {
  constructor(element){

    this.element = element;
  }
  selectCard(){
    // Update the style of this.element to display = null
    this.element;
  }

}
let cards = document.querySelectorAll('.card');
console.log(cards)
cards = Array.from(cards).map(x => new TabCard(x));
console.log(cards)
// Create a reference to all ".tab" classes
let tabs = document.querySelectorAll('.tab');

// Map over the array and convert each tab reference into a new TabLink object.  Pass in the tab object to the Tabs class.
tabs = Array.from(tabs).map(x => new TabLink(x))
console.log(tabs)


//Once you are complete, call the .select method on the first tab