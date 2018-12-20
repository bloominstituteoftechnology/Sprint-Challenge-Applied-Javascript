class TabLink {
  constructor(tabElement){
    this.tabElement = tabElement;
    this.tabData = this.tabElement.dataset.tab
  
  if (this.tabData = "all") {
      
       this.cards = document.querySelectorAll("card");
  } else {
       this.cards = document.querySelector(".tabData");
  }




  }
}
selectTab() {
  
  const tabs = document.querySelectorAll(".tab");
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove("active-tab");
  }

  const cards = document.querySelectorAll(".card");
   for(let i = 0; i < cards.length; i++) {
     cards[i].style.display = "none";
   }
   this.tabElement.classList.add("active-tab");
   this.cards.forEach(card => card.selectCard());
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