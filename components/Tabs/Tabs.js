//initial comment to push and open pull request

class TabLink {
  constructor(tabElement){
  
    this.tabElement = tabElement;
    this.tabData = this.tabElement.dataset.tab; 

    if(this.tabData == 'all'){
      
      this.cards = document.querySelectorAll('.card');
    } else {
      
      this.cards = document.querySelectorAll (`.card[data-tab ="${this.tabData}"]`);
    }
    
    this.cards = Array.from(this.cards).map(item => new TabCard(item));

    this.tabElement.addEventListener('click', () => {this.selectTab()});
  }

  selectTab(){

   
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(item => item.classList.remove('active-tab'))

    const cards = document.querySelectorAll('.card');
    cards.forEach(item => item.style.display = ('none'));
    
    this.tabElement.classList.add('active-tab');
  
     this.cards.forEach(card => card.selectCard());
  }
}

class TabCard {
  constructor(cardElement){
   
    this.cardElement = cardElement;
  }
  selectCard(){
   
    this.cardElement.style.display = 'flex';
  }

}

let tabs = document.querySelectorAll('.tab');
console.log(tabs);
tabs.forEach(item => new TabLink(item));

//changing the date to match current date

const date = new Date();
const dmy = date.toDateString();
const update = document.querySelector('.date').innerHTML = dmy;