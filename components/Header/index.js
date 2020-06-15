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

const headerContainer = document.querySelector('.header-container');

const headerContent = Header();

headerContainer.appendChild(headerContent);

function Header() {
    // creating the elements
    const header = document.createElement('div');
    const headerDate = document.createElement('span');
    const headerTitle = document.createElement('h1');
    const headerTemp = document.createElement('span');

    // appending to the header div
    header.appendChild(headerDate);
    header.appendChild(headerTitle);
    header.appendChild(headerTemp);

    // adding the classes
    header.classList.add('header');
    headerDate.classList.add('date');
    headerTemp.classList.add('temp');

    // adding attributes to the elements
    headerDate.textContent = 'MARCH 28, 2019';
    headerTitle.textContent = 'Lambda Times';
    headerTemp.textContent = '98°';

    // console.log(header);

    return header;
}
