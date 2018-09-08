class TabLink {
  constructor(element){
    this.element = element;
    this.tabData = this.element.dataset.tab; 
    if(this.tabData === 'all'){
      this.cards = document.querySelectorAll('.card');
    } else {
      this.cards = document.querySelectorAll(`.card[data-tab = '${this.tabData}']`);
    }
    this.cards = Array.from(this.cards).map(card => //Why no curly braces?
      new TabCard(card)
    );
    this.element.addEventListener('click', () =>{
      this.selectTab();
    });
  }
  selectTab(){
    const tabs = document.querySelectorAll('.tab'); ////Why does this seem to exist on 58 as well?
    tabs.forEach(tab =>{
      tab.classList.remove('active-tab');
    })
    this.element.classList.add('active-tab');
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
      card.style.display = 'none'
    })
    // Notice we are looping through the this.cards array and invoking selectCard() from the TabCard class, nothing to update here
    this.cards.forEach(card => card.selectCard());
  }
}

class TabCard {
  constructor(element){
    this.element = element;
  }
  selectCard(){
    this.element.style.display = null;
  }

}

// Create a reference to all ".tab" classes
let tabs = document.querySelectorAll('.tab');
// Map over the array and convert each tab reference into a new TabLink object.  Pass in the tab object to the Tabs class.
tabs = Array.from(tabs).map(tab =>
  new TabLink(tab)
);

//Once you are complete, call the .select method on the first tab
tabs[0].selectTab();
