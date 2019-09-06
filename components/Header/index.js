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

const head = document.querySelector('.header-container');

function Header(newHeader) {
    const header = document.createElement('div');
    const date = document.createElement('span');
    const headline = document.createElement('h1');
    const temp = document.createElement('span');

    //add Class
    headline.classList.add('headline');

    //add Content
    date.textContent = 'SMARCH 28, 2019';
    headline.textContent = 'Lambda Times';
    temp.textContent = '98 Degrees';

    //add appends
    header.appendChild(Header(newHeader));
    header.appendChild(date);
    header.appendChild(headline);
    header.appendChild(temp);

    return header;

};
