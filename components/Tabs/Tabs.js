class TabLink {
  constructor(tabElement){
    // assign this.tabElement to the tabElement DOM reference
    // this.tabElement;
    this.tabElement = tabElement;

    // Get the `data-tab` value from this.tabElement and store it here
    // this.tabData = ;
    this.tabData = this.tabElement.dataset.tab;
    // We need to find out if a user clicked 'all' cards or a specific category.  Follow the instructions below to accomplish this task:


    if(this.tabData === 'all'){
      this.cards = document.querySelectorAll('.card')

    } else {

        this.cards = document.querySelectorAll('.card[data-tab = {this.tabData}]')
      }

    }


    this.cards = Array.from(this.cards).map(cards => new TabCard(cards))

    this.element.addEventListener('click', () => {
      this.selectTab();
    })

    selectTab() {

      const tabs = document.querySelectorAll('.tab')

      tabs.forEach(function(each){
        each.classList.remove('active-tab')
      })

      this.element.classList.add('active-tab')

      const cards = document.querySelectorAll('.card')

      cards.forEach(function(each) {
        each.style.display = 'none';

      })

      this.cards.forEach(card => card.selectCard());
    }

      class TabCard {
        constructor(element){
          this.element = element;
        }
        selectCard(){
          this.element.style.display = null
        }
      }

      let tabs = document.querySelectorAll('.tab');

      tabs = Array.from(tabs).map(tabs => new Tablink(tabs));

      tabs[0].selectTab()
