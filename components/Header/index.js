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
    const headerDiv = document.createElement('div');
    const spandate = document.createElement('span');
    const h1title = document.createElement('h1');
    const spantemp = document.createElement('span');

    headerDiv.appendChild(spandate);
    headerDiv.appendChild(h1title);
    headerDiv.appendChild(spantemp);

    headerDiv.classList.add('header');
    spandate.classList.add('date');
    spantemp.classList.add('temp');

    spandate.textContent = 'SMARCH 28, 2019';
    h1title.textContent = 'Lambda Times';
    spantemp.textContent='98°';

    return headerDiv;


}

const bigheader = document.querySelector('.header-container');
bigheader.appendChild(Header());
