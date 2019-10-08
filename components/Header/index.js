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

function Header() {

    let header = document.createElement('div');
    let date = document.createElement('span');
    let h1 = document.createElement('h1');
    let temp = document.createElement('span');

    // Give elements classes
    header.classList.add('header');
    date.classList.add('date')
    temp.classList.add('temp');

    // Give elements content
    date.textContent = 'July 21, 2019';
    h1.textContent = 'Lambda Times';
    temp.innerHTML = '98&deg';

    // Append elements together
    headerContainer.appendChild(header);
    header.appendChild(date);
    header.appendChild(h1);
    header.appendChild(temp);

    return header;
}

let headerContainer = document.querySelector('.header-container');
let menuSystem = new Header();
headerContainer.appendChild(menuSystem);