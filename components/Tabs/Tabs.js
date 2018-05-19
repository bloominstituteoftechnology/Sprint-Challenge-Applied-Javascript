class TabCard {
  constructor(element){
    this.element;
  }
  selectCard(){
    this.element;
  }
  deselectCard(){
    this.element;
  }
}

class TabLink {
  constructor(element, parent){
    this.element;
    this.parent;

    this.cards = this.parent.getCards(this.element.dataset.tab);
    this.cards;

    this.element.addEventListener();
  }

  selectTab(){
    this.parent;
    this.element;
    this.cards;
  }

  deselectTab(){
    this.element;
    this.cards;
  }
}

class Tabs {
  constructor(element){
    this.element = element;

    this.tabs;
    this.tabs = Array.from(this.tabs).map( tab => new TabLink(tab, this) );

    this.activeTab;
    this.init();
  }

  init(){
    this.activeTab;
  }

  updateActive(tabElement){
    this.activeTab;
    this.activeTab;
  }

  getCards(data){
    // This method is meant to get all the cards from the HTML page.  
    // If the data supplied is 'all' then all of the cards should be returned. 
    // Otherwise, only cards matching the data attribute should be returned. 
  }
}

let tabs = document.querySelectorAll();


