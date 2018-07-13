class Tabs {
  constructor(element){
    this.element = element;
   
    this.tabs = document.querySelectorAll('.tab');
    
    this.tabs = Array.from(this.tabs).map( tab => new TabLink(tab, this) );

    this.activeTab = this.tabs[0];
    console.log("init active should be all", this.activeTab);
    
    this.init();
  }

  init(){
    this.activeTab;
  }

  updateActive(tabElement){
    
    this.activeTab.deselectTab();

    this.activeTab = tabElement;
    console.log("updating active", this.activeTab);
    
  }

  getCards(data){
    // console.log(data);
    
    if(data == "all") {
       return this.element.querySelectorAll(`.card`);
    } else {
      return document.querySelectorAll(`.card[data-tab="${data}"]`);
    }
  }
}

class TabLink {
  constructor(element, parent){
    
    this.element = element;
    
    this.parent = parent;
    this.cards = this.parent.getCards(this.element.dataset.tab);
    
    this.cards = Array.from(this.cards).map((card)=>{
      console.log("Card in tablink", card);
      
      return new TabCard(card);
    });

    this.element.addEventListener('click', ()=>{
      this.selectTab()
    });
  }

  selectTab(){    
    
    this.parent.updateActive(this);
    console.log("sel cards",this.cards);
    this.element.classList.add('active-tab');
    this.cards.forEach(card => card.selectCard());
    
    
  }

  deselectTab(){
    
    this.element.classList.remove('active-tab');
    console.log("cards to de", this.cards);
    
    this.cards.forEach( (card) => {
      console.log("card", card);
      
      card.deselectCard()
    });
  }
}

class TabCard {
  constructor(element){
    
    this.element = element;
    console.log("this elem in tabcard", this.element);
    
  }
  selectCard(){
    
    this.element.style.display = "flex";
  }
  deselectCard(){
    console.log("deslected card",this.element);
    
    this.element.style.display = "none";
    
  }
}


let tabs = document.querySelectorAll('.tabs');

tabs = Array.from(tabs).map((tab)=>{
  return new Tabs(tab);
});
