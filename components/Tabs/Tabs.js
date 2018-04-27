class TabCard {
  constructor(element) {

    // Use a jQuery selector to assign this.element to the DOM reference

    this.element = $(element);

    console.log("This is what is in this.element in the TabCard constructor:")
    console.log(this.element);
  }

  selectCard() {

    // show the card

    this.element.show();
  }

  deselectCard() {

    // hide the card

    this.element.hide();
  }
}

class TabLink {
  constructor(element, parent){

    // Use a jQuery selector to assign this.element to the DOM reference

    this.element = $(element);

    console.log("This is what is in this.element in the TabLink constructor:");
    console.log(this.element);

    // assign this.parent to the parent parameter

    this.parent = parent; // Should be an object not an array.

    console.log("This is what is in this.parent in the TabLink constructor:");
    console.log(this.parent);

    // Note that we are calling getCards() on Tabs (The parent of TabLink) and passing the data attribute: data-tab, no need to update this line of code.

    this.cards = this.parent.getCards(this.element.data('tab'));

    console.log("This is what is in this.cards after calling getCards() in the TabLink constructor:");
    console.log(this.cards);

    // Using jQuery, map over the array of cards. In your callback function, create new instances of the TabCard class that contain a card reference. TabCard(card) as an example.

    this.cards = this.cards.map((i, item) => new TabCard(item));

    console.log("This is what is in this.cards after mapping in TabLink constructor:");
    console.log(this.cards);

    // You will need to create a click handler for the TabLink element that calls selectTab()

    this.element.click(() => {
      this.selectTab();
    });
  }

  selectTab() {

    // use this.parent to call the updateActive() method and pass the `this` keyword as a parameter

    this.parent.updateActive(this);

    // using a jQuery method, add a class to this.element named "active-tab"

    this.element.addClass('active-tab');

    // iterate over each card using the .each() method in jQuery. call the selectCard() method in your callback function

    this.cards.each((i, item) => {
      item.selectCard();
    });
  }

  deselectTab(){

    // use a jQuery method to remove the class "active-tab" from this.element

    this.element.removeClass('active-tab');

    // iterate over each card using the .each() method in jQuery. call the deselectCard() method in your callback function

    this.cards.each((i, item) => {
      item.deselectCard();
    });
  }
}

class Tabs {
  constructor(element){

    this.element = $(element); // goood

    console.log("This is what is in this.element in the Tabs constructor:");
    console.log(this.element);

    // Using jQuery, find all of the tabs on this element.

    this.tabs = this.element.find('.tab');

    console.log("This is what is in this.tabs in the Tabs constructor:");
    console.log(this.tabs);

    this.tabs = this.tabs.map((i, tab) => new TabLink(tab, this));

    console.log("This is what is in this.tabs after mapping in the Tabs constructor:");
    console.log(this.tabs);

    // Set the initial active tab to the first tab in the list.

    this.activeTab = this.tabs[0];

    console.log("This is the first item in this.activeTab in the Tabs constructor:");
    console.log(this.activeTab);

    this.init();
  }

  init(){

    // use activeTab to call the selectTab() method

    this.activeTab.selectTab();
  }

  updateActive(tabElement) {
    // use activeTab to call the deselectTab() method

    this.activeTab.deselectTab();

    // assign activeTab to tabElement

    this.activeTab = tabElement;
  }

  getCards(data){

    // This method is meant to get all the cards from the HTML page.
    // If the data supplied is 'all' then all of the cards should be returned.
    // Otherwise, only cards matching the data attribute should be returned.

    console.log("JQuery get the cards that are needed.");
    console.log(data);
    if (data === 'all') {
        return $('.card');
    }
    else {
      return $(`.card[data-tab="${data}"]`);
    }
  }
}

// Using jQuery, select the correct tabs component. Then initialize the Tabs class.

let tabs = $('.tabs');

console.log("This is what is in tabs:");
console.log(tabs);

tabs = new Tabs(tabs)

console.log("This is what is in tabs after Tabs class initialization:")
console.log(tabs);
