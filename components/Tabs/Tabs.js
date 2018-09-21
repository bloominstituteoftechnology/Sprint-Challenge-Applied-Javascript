class TabLink {
  constructor(element){

    this.element = element;

    this.tabData = this.element.dataset.tab; 
    console.log(this.tabData)
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
    })
  }

  selectTab(){

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