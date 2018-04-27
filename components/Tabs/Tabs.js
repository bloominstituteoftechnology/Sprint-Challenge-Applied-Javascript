class TabCard {
  constructor(element){ // TabCard is being passed the value of Tabs.getCards('value of current '.tab' data attribute), so the cards that have the same data attribute as the current tab
    this.element = $(element) // The element property is equal to the cards matched up to their '.tab' class
  }
  selectCard(){
    this.element.show(); // '.card' show
  }
  deselectCard(){
    this.element.hide(); // '.card' hide
  }
}

class TabLink {
  constructor(element, parent){ // Therefore, the parameters for TabsLink are the value of the 'tab' class and the value of the Tabs constructor
    this.element = $(element); // the proeprty element is equal to the value of the 'tab' class
    this.parent = parent; // the parent proeprty is equal to the value of the Tabs constructor
    this.cards = this.parent.getCards(this.element.data('tab')); // the cards property of the TabLink is assigned the value of Tabs.getCards('value of current '.tab' data attribute)
    this.cards = this.cards.map((index, cards) => new TabCard($(cards))) // the cards property of the TabLink is assigned the value of every new instance of TabCard, passing the argument of the value of the Tabs.getCards('value of current '.tab' data attribute)
    this.element.click(() => { // Click handler that invokes selectTab on itself.... so '.tab'.click() => ( '.tab'.selectTab)
      this.selectTab()
    })
  }

  selectTab(){
    this.parent.updateActive(this); // Tabs.updateActive('.tab')
    this.element.addClass('active-tab'); // '.tab'.addClass('ative-tab')
    this.cards.each((i, card) => { // Looks for the cards created in the cosntructor and invokes selectCard after selectTab is invoked
      card.selectCard()
  })
  }

  deselectTab(){
    this.element.removeClass('active-tab'); // '.tab'.removeClass('active-tab')
    this.cards.each((i, card) => { // Looks for cards created in the constructor and invokes deselectCard after deselectTab has been invoked
      card.deselectCard()
    })
  }
}

class Tabs {
  constructor(tabs){ // The element is therefore the value of the class 'tabs'
    this.tabs = $('.tabs'); // Equivalent to this.tabs = $('.tabs')? - apparently so (was element as parameter and used throughout)
    this.tabs = this.tabs.find('.tab'); // the property of tabs on Tabs is assigned the value of all instances of the class 'tab'
    this.tabs = this.tabs.map( (i, tab) => { // the property of tabs on Tabs is assigned to new instances of Tablink, passing the value of the class 'tab' and itself as arguments.
      return new TabLink(tab, this)
     } ); // - Apparently, return is implicit, but you *can* return the function and have it still work.
    this.activeTab = this.tabs[0]; // The activeTab on Tabs is given the value of the first '.tab' element
    this.init(); // initialize Tabs
  }
  init(){
    this.activeTab.selectTab(); // Method where the activeTab property on Tabs invokes selectTab
  }
  updateActive(tabElement){
    this.activeTab.deselectTab(); // Method where activeTab property on Tabs invokes deselectTab
    this.activeTab = tabElement; // Method where the activeTab property is assigned the value of the TabLink that invoked it
  }
  getCards(data){ // getCards takes the value of current '.tab' data attribute as an argument
    if (data === 'all') { // if the value of the data attribute is 'all'
      return $(`.card`); // return all instances of the 'card' class
      }  else { // if the value of the data attribute is not 'all'
          return $(`.card[data-tab=${data}]`) // return the cards that match the value of the data attribute of the tab invoking it
      }
  }
}
let tabs = $('.tabs');  // let the variable tabs be assigned the value of the class 'tabs' 
tabs = new Tabs(tabs);// Let that variable tabs now be assigned the value of a new instance of Tabs, passing the value of tabs, which is the 'tabs' class, as an argument

 



