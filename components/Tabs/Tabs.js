class TabCard {
  constructor(element) {
    this.element = $(element);
  }
  selectCard() {
    this.element.show();
  }
  deselectCard() {
    this.element.hide();
  }
}

class TabLink {
  constructor(element, parent) {
    this.element = $(element);
    this.parent = parent;
    this.cards = this.parent.getCards(this.element.data('tab'));
    this.cards = this.cards.map((index, card) => new TabCard(card));
    this.element.click(() => this.selectTab());
  }

  selectTab() {
    this.parent.updateActive(this);
    this.element.addClass('active-tab');
    this.cards.each((index, card) => card.selectCard());
  }

  // use a jQuery method to remove the class "active-tab" from this.element
  // iterate over each card using the .each() method in jQuery. call the deselectCard() method in your callback function
  deselectTab() {
    this.element.removeClass('active-tab');
    this.cards.each((index, card) => card.deselectCard());
  }
}
// Using jQuery, find all of the tabs on this element.
// Set the initial active tab to the first tab in the list.
class Tabs {
  constructor(element) {
    this.element = $(element);
    this.tabs = this.element.find('.tab');
    this.tabs = this.tabs.map((i, tab) => new TabLink(tab, this));
    this.activeTab = this.tabs[0];
    this.init();
  }

  init() {
    // use activeTab to call the selectTab() method
    this.activeTab.selectTab();
  }

  updateActive(tabElement) {
    // use activeTab to call the deselectTab() method
    this.activeTab.deselectTab();
    // assign activeTab to tabElement
    this.activeTab = tabElement;
  }

  getCards(data) {
    // This method is meant to get all the cards from the HTML page.  
    // If the data supplied is 'all' then all of the cards should be returned. 
    // Otherwise, only cards matching the data attribute should be returned. 
    if (data === "all") {
      return $(".card");
    } else {
      return $(`.card[data-tab="${data}"]`);
    }
  }
}
// Using jQuery, select the correct tabs component. Then initialize the Tabs class.
let tabs = $('.tabs');
tabs = new Tabs(tabs)

