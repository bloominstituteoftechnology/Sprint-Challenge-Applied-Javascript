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
header.classList.add('header');

const date = document.createElement('span');
date.classList.add('date');

const h1 = document.createElement('h1');

const temp = document.createElement('span');
temp.classList.add('temp');

header.appendChild(date);
header.appendChild(h1);
header.appendChild(temp);

date.innerText = "SMARCH 28, 2019";
h1.innerText = "Lambda Times";
temp.innerText = "98 \u00B0";

const headerContainer = document.querySelector('.header-container')

headerContainer.appendChild(header);
}
Header();
