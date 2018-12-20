class TabLink {
  constructor(tabElement){
    



















    class TabCard {
  constructor(cardElemtnt) {
    this.cardElemtnt = cardElemtnt;

  }

 selectCard() {
this.cardElemtnt.style.display = "flex"

 }

}

let tabs = document.querySelectorAll(".tabs");
tabs.forEach(function(tab) {
  return new TabLink(tab)
});