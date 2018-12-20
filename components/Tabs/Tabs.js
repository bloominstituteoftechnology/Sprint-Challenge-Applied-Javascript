class TabLink {
  constructor(tabElement){
    




  
selectTab() {
  const tabs = document.querySelectorAll(".tab");
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove("active-tab");
  }
}
  const cards = document.querySelectorAll(".card");
   for(let i = 0; i < cards.length; i++) {
     cards[i].style.display = "none";
   }
   this.tabElement.classList.add("active-tab");
   this.cards.forEach(card => card.selectCard());
}

}
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