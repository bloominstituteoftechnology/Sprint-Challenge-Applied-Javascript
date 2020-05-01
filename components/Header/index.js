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

function Header() {

    const header = document.createElement('div');
    const date = document.createElement('span');
    const tagH1 = document.createElement('h1');
    const temp1 = document.createElement('span');


    header.classList.add('header');
    date.classList.add('date');
    temp1.classList.add('temp');

    date.textContent ='SMARCH 28, 2019';
    tagH1.textContent = 'Lambda Times';
    temp1.textContent = '98 \u00B0';

    const headerContainer = document.querySelector('.header-container');


    headerContainer.appendChild(header);
    headerContainer.appendChild(date);
    headerContainer.appendChild(tagH1);
    headerContainer.appendChild(temp1);

    
}

Header();