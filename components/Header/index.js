// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {

    let header = document.createElement('header');
    let todaysDate = document.createElement('span');
    let title = document.createElement('h1');
    let temp = document.createElement('span');

    header.classList.add('header');
    todaysDate.classList.add('date');
    temp.classList.add('temp');

    todaysDate.textContent = `September 2019`;
    title.textContent = 'Lambda Times';
    temp.textContent = '98';

    
    header.appendChild(todaysDate);
    header.appendChild(title);
    header.appendChild(temp);

    return header;
}

const headerContainer = document.querySelector('.header-container');
headerContainer.appendChild(Header());
