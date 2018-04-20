class TabCard {
  constructor(element){
    // Follow the lead from the other classes.
  }
  selectCard(){}
  deselectCard(){}
}

class TabLink {
  constructor(element, parent){
    this.element;
    this.parent;
    // You will need to use a method on the parent to get all of the 
    // cards that share the data attribute with this tab.
    this.cards;
    // Using jQuery map over the array of Cards creting new instances
    // of the TabCard class for each.

    // You will need to create a click handler for the TabLink.
  }

  selectTab(){
  }

  deselectTab(){
  }
}

class Tabs {
  constructor(element){
    this.element = $(element);
    
    // Using jQuery find all of the tabs on this element.
    this.tabs;

    // Map over the array of tabs creating a new instance of the TabLink class for each.
    this.tabs = this.tabs.map( );
    
    // Set the initial active tab to the first tab in the list.
    this.active;
    this.init();
  }

  init(){

  }

  updateActive(tabElement){
    // Write the method to deslect the old tab and set the activeTab to the new TabLink.
  }

  getCards(data){
    // If the data supplied is 'all' then all of the cards should be returned. 
    // Otherwise, only cards matching the data attribute should be returned. 
  }
}

// Using jQuery select the correct tabs component. Then initialize the Tabs class.

let tabs = $();
// tabs = new Tabs(tabs)


