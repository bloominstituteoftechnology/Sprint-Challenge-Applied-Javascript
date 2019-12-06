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
function Header() {
    //new elements
    const headerBody = document.createElement('div');
    const hDate = document.createElement('span');
    const hTitle = document.createElement('h1');
    const hDegrees = document.createElement('span');

    //set class names 
    headerBody.classList.add('header');
    hDate.classList.add('date');
    hDegrees.classList.add('span');

    //structure
    headerBody.appendChild(hDate);
    headerBody.appendChild(hTitle);
    headerBody.appendChild(hDegrees);

    //textContent
    hDate.textContent = 'SMARCH 28, 2019';
    hTitle.textContent = 'Lambda Times';
    hDegrees.textContent = '98°';

    return headerBody;
};

headerContainer.appendChild(Header());
