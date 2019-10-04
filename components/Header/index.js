// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function header() {

    const headerCard = document.createElement('div');
    const dateCard = document.createElement('span')
    const h1Card = document.createElement('h1');
    const tempCard = document.createElement('span')

    headerCard.appendChild(dateCard);
    headerCard.appendChild(h1Card);
    headerCard.appendChild(tempCard);

    headerCard.classList.add('header');
    dateCard.classList.add('date');
    tempCard.classList.add('temp');

    return headerCard;
}

const headerParent = document.querySelector('.header-container')

headerParent.appendChild(header)