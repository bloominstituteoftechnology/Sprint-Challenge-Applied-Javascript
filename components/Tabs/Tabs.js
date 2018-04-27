class TabCard {
  constructor(element){
    // Use a jQuery selector to assign this.element to the DOM reference
    this.element = $(element);

  }
  selectCard(){
    // console.log('Hallo from selectCard()');
    // show the card
    this.element.addClass('showCard');
  }
  deselectCard(){
    // console.log('Hallo from deselectCard');
    // hide the card
    this.element.toggleClass('showCard');
  }
}

class TabLink {
  constructor(element, parent){
    // Use a jQuery selector to assign this.element to the DOM reference
    this.element = $(element);
    // assign this.parent to the parent parameter
    this.parent = parent;

    // Note that we are calling getCards() on Tabs (The parent of TabLink) and passing the data attribute: data-tab, no need to update this line of code.
    this.cards = this.parent.getCards(this.element.data('tab'));
    // console.log(this.cards.length);

    // Using jQuery, map over the array of cards.  In your callback function, create new instances of the TabCard class that contain a card reference. TabCard(card) as an example.
    this.cards = this.cards.map( (i, card) => new TabCard(card) );

    // You will need to create a click handler for the TabLink element that calls selectTab()
    this.element.on('click', this.selectTab.bind(this) )  ;
  }

  selectTab(){
    // console.log('Hallo from selectTab()');
    // use this.parent to call the updateActive() method and pass the `this` keyword as a parameter
    this.parent.updateActive(this);
    // using a jQuery method, add a class to this.element named "active-tab"
    this.element.toggleClass('active-tab');
    // iterate over each card using the .each() method in jQuery. call the selectCard() method in your callback function
    if (this.cards.length === 0) {
      this.parent.displayAllCards();
    } else {
      $.each( this.cards, function(i, card){ card.selectCard() })
    }
  }
  
  deselectTab(){
    // console.log('Hallo from deselectTab()');
    // use a jQuery method to remove the class "active-tab" from this.element
    this.element.toggleClass('active-tab');
    // iterate over each card using the .each() method in jQuery. call the deselectCard() method in your callback function
    this.parent.allCards.map( (i, card) => $(card).removeClass('showCard') );
  }
}

class Tabs {
  constructor(element){
    this.element = $(element);
    
    // Using jQuery, find all of the tabs on this element.
    this.tabs = element.find('.tab');
    // // console.log(this.tabs);

    this.tabs = this.tabs.map( (i, tab) => new TabLink(tab, this) );
    this.allCards = this.element.parent().find('.card');
    // Set the initial active tab to the first tab in the list.
    this.firstTab = this.tabs[0];
    this.activeTab = this.firstTab;
    // // console.log(this.tabs[0]); // This is a jQuery object

    this.init();
  }

  init(){
    // console.log('Hallo from init()');
    // use activeTab to call the selectTab() method
    this.displayAllCards();
    this.activeTab.selectTab();
  }

  updateActive(tabElement){
    // console.log('Hallo from updateActive()');
    // use activeTab to call the deselectTab() method
    this.activeTab.deselectTab();
    // assign activeTab to tabElement
    this.activeTab = tabElement;
  }

  getCards(data){
    // This method is meant to get all the cards from the HTML page.  
    // If the data supplied is 'all' then all of the cards should be returned. 
    // Otherwise, only cards matching the data attribute should be returned. 
    // console.log('Hallo from getCards()');
    return this.element.parent().find(`.card[data-tab="${data}"]`);
  }
  displayAllCards() {
    this.allCards.map( (i, card) => $(card).addClass('showCard') );
  }
}

// Using jQuery, select the correct tabs component. Then initialize the Tabs class.
let tabs = $('.tabs');
tabs = new Tabs(tabs)


