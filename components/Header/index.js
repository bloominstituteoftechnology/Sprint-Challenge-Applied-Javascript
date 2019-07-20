// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

function Header() {
    // Create Template
const headerContainer = document.querySelector('.header-container');
const headerDiv = document.createElement('div');
const headerDate = document.createElement('span');
const title = document.createElement('h1');
const headerTemp = document.createElement('span');
const currDate = new Date();

// Assign Classes to Template
headerDiv.classList.add('header');
headerDate.classList.add('date');
headerTemp.classList.add('temp');

// Assign Values
headerDate.textContent = `${currDate}`;
console.log(currDate);
title.textContent = 'Lambda Times';
headerTemp.textContent = '98°';

// Assemble Header
headerContainer.appendChild(Header);
headerDiv.appendChild(headerDate);
headerDiv.appendChild(title);
headerDiv.appendChild(headerTemp);

return headerDiv;
}

