//TABCARD CLASS

class TabCard {

  constructor(element) {
    this.element = $(element);
  }

  // ==== TabCard Methods ==== //
  selectCard() {
    this.element.show();
  }
  deselectCard() {
    this.element.hide();
  }
}


//TABLINK CLASS

class TabLink {

  constructor(element, parent) {
    this.element = $(element);
    this.parent = parent;
    this.cards = this.parent.getCards(this.element.data("tab"));
    this.cards = this.cards.map((index, card) =>
      new TabCard(card)
    );
    this.element.click(() =>
      this.selectTab()
    );
  }

  // ==== TabLink Methods ==== //

  selectTab() {
    this.parent.updateActive(this);
    this.element.addClass("active-tab");
    this.cards.each(function (i) {
      this.selectCard()
    });
  }
  deselectTab() {
    this.element.removeClass("active-tab");
    this.cards.each(function (i) {
      this.deselectCard()
    });
  }
}

// TABS CLASS

class Tabs {

  constructor(element) {
    this.element = $(element);
    this.tabs = this.element.find(".tab"); // Y
    this.tabs = this.tabs.map((i, tab) => new TabLink(tab, this));
    this.activeTab = this.tabs[0];
    this.init();
  }

  // ==== Tabs Methods ==== //

  init() {
    this.activeTab.selectTab();
  }
  updateActive(tabElement) {
    this.activeTab.deselectTab();
    this.activeTab = tabElement;
  }
  getCards(data) {
    let cardsContainer = $(".cards-container");
    let cards = $(".card");
    if (data === "all") {
      return cards;
    } else {
      return cardsContainer.find(`.card[data-tab="${data}"]`);
    }
  }
}

// ==== Let's Map It ==== //

let tabs = $(".tabs");
tabs = tabs.map((index, tab) =>
  new Tabs(tab)
);