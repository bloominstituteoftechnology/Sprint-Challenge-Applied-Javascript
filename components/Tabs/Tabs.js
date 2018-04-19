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
    this.parent = parent
    this.cards = this.parent.getCards(this.element.data('tab'));
    this.cards = this.cards.map( (i, card) => new TabCard(card));
    this.element.click( () => { this.selectTab() })
  }

  selectTab(){
    this.parent.updateActive(this);
    this.element.addClass('active-tab');
    this.cards.each( (i, card) => card.selectCard());
  }

  deselectTab(){
    this.element.removeClass('active-tab');
    this.cards.each( (i, card) => card.deselectCard());
  }
}

class Tabs {
  constructor(element){
    this.element = $(element);
    this.tabs = this.element.find('.tab');
    this.tabs = this.tabs.map( (i, tab) => new TabLink(tab, this) );
    this.active = this.tabs[0]
    this.init()
  }

  init(){
    this.active.selectTab();
  }

  updateActive(tabElement){
    this.active.deselectTab();
    this.active = tabElement;
  }

  getCards(data){
    if(data === 'all'){
      return $('.card');
    } else {
      return $(`.card[data-tab=${data}]`);
    }
  }
}

let tabs = $('.tabs');
tabs = new Tabs(tabs)


