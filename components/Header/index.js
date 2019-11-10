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
    const header = document.createElement('div');
    const date1 = document.createElement('span');
    const title = document.createElement('h1');
    const temp1 = document.createElement('span');


    header.appendChild(date1);
    header.appendChild(title);
    header.appendChild(temp1);

    header.classList.add('header');
    date1.classList.add('date');
    temp1.classList.add('temp');

    date1.textContent = 'SMARCH 28, 2019';
    title.textContent = 'Lambda Times';
    temp1.textContent = 'temp 98°';


return header;
}

headerContainer.appendChild(Header());
