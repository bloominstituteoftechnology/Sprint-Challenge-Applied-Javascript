class TabCard {
  constructor(element){
    // Use a jQuery selector to assign this.element to the DOM reference
    this.element;
  }
  selectCard(){
    // show the card
    this.element;
  }
  deselectCard(){
    // hide the card
    this.element;
  }
}

class TabLink {
  constructor(element, parent){
    this.element = $(element); // Use a jQuery selector to assign this.element to the DOM reference
    this.parent = parent; // assign this.parent to the parent parameter
    this.cards = this.parent.getCards(this.element.data('tab')); // get correspoinding card selectors for tab link
    this.cards = this.cards.map((index, card) => new TabCard(card)); // For each card selector, create an instance of TabCard
    this.element.click(() => this.selectTab()); // Call selectTab on click
  }

  selectTab(){
    this.parent.updateActive(this.element); // use parent to call updateActive and pass it current tab
    this.element.addClass('active-tab'); // add a class to this.element named "active-tab"
    this.cards.each((index, card) => card.selectCard()); // call selectCard for each appropriate card
  }

  deselectTab(){
    this.element.removeClass('active-tab'); // remove the class "active-tab" from this.element
    this.cards.each((index, card) => card.deselectCard()); // call deselectCard for each appropriate card
  }
}

class Tabs {
  constructor(element){
    this.element = $(element);
    this.tabs = this.element.find('.tab'); // find all of the tabs on this element.
    this.tabs = this.tabs.map( (i, tab) => new TabLink(tab, this) ); // creating TabLink instance for each tab
    this.activeTab = this.tabs[0]; // Set the initial active tab to the first tab in the list.
    this.init();
  }

  init(){
    this.activeTab.selectTab(); // use activeTab to call the selectTab() method
  }

  updateActive(tabElement){
    this.activeTab.deselectTab(); // use activeTab to call the deselectTab() method
    this.activeTab = tabElement; // assign activeTab to tabElement
    this.activeTab.selectTab();
  }

  getCards(data){
    return (data === 'all') ? $('.card') : $(`.card[data-tab="${data}"]`); // return appropriate card selectors based on data
  }
}

// Using jQuery, select the correct tabs component. Then initialize the Tabs class.
let tabs = $();
// tabs = new Tabs(tabs)


