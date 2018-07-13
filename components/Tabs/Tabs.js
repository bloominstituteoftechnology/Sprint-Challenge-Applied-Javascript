class Tabs {
  constructor(element){
    this.element = element;
   
    this.tabs = ;

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
    
    if(data) {
      
      return;
    } else {
      
      return document.querySelectorAll(`.card`);
    }
  }
}

class TabLink {
  constructor(element, parent){
    
    this.element;
    
    this.parent;
    
    this.cards = this.parent.getCards(this.element.dataset.tab);
    
    this.cards = Array.from(this.cards).map();
    
    this.element.addEventListener();
  }

  selectTab(){
    
    this.parent.updateActive(this);
    
    this.element;
    
    this.cards.forEach(card => card.selectCard());
  }

  deselectTab(){
    
    this.element;
    
    this.cards.forEach( card => card.deselectCard());
  }
}

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


let tabs = document.querySelectorAll();

tabs = Array.from(tabs).map()
