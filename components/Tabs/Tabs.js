class TabCard {
  constructor(element){
    this.element = $(element);
  }
  selectCard(){
    this.element.show();
  }
  deselectCard(){
    this.element.hide();
  }
}

class TabLink {
  constructor(element, parent){
    this.element = $(element);
    this.parent = parent;
    this.cards = this.parent.getCards(this.element.data('tab')); // get card selectors for this tab link
    this.cards = this.cards.map((index, card) => new TabCard(card)); // For each card selector, create an instance of TabCard
    this.element.click(() => this.selectTab());
  }

  selectTab(){
    this.parent.updateActive(this); // use parent to call updateActive and pass it current tab
    this.element.addClass('active-tab');
    this.cards.each((index, card) => card.selectCard()); // call selectCard for each appropriate card
  }

  deselectTab(){
    this.element.removeClass('active-tab');
    this.cards.each((index, card) => card.deselectCard()); // call deselectCard for each appropriate card
  }
}

class Tabs {
  constructor(element){
    this.element = $(element);
    this.tabs = this.element.find('.tab');
    this.tabs = this.tabs.map( (i, tab) => new TabLink(tab, this) ); // creating TabLink instance for each tab
    this.activeTab = this.tabs[0];
    this.init();
  }

  init(){
    this.activeTab.selectTab();
  }

  updateActive(tabElement){
    this.activeTab.deselectTab();
    this.activeTab = tabElement;
  }

  getCards(data){
    return (data === 'all') ? $('.card') : $(`.card[data-tab="${data}"]`); // return appropriate card selectors based on data
  }
}

let tabs = $('.tabs');
tabs = new Tabs(tabs);
