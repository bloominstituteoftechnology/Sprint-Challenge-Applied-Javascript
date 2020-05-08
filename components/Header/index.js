// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container


//elements created for card

/* remember when it says "append" to the DOM it really means to PUT it in the header. */
function Header() {
    //create the elements
    const headerContainer = document.createElement('div');
    const date = document.createElement('span');
    const headerOne = document.createElement('h1');
    const temp = document.createElement('span');

    //add classes to the elements
    headerContainer.classList.add('header');
    date.classList.add('date');
    temp.classList.add('temp');

    //add content
    date.textContent = 'SMARCH 28, 2019';
    headerOne.textContent = 'Lambda Times';
    temp.textContent = '98';

    //append the children
    headerContainer.appendChild(date);
    headerContainer.appendChild(headerOne);
    headerContainer.appendChild(temp);

    return headerContainer;
}

const parentHeader = document.querySelector('.header-container');
parentHeader.appendChild(Header());