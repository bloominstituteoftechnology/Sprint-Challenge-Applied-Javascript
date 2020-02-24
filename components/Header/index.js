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
headerDiv.classList.add("header");
const currentDate = document.createElement('span');
currentDate.textContent = "March 28 2019";

const pageHeader = document.createElement('h1');
pageHeader.textContent = "Lambda Times"

const temp = document.createElement('span');
temp.classList.add( 'temp');
temp.textContent = "98";

headerDiv.appendChild(currentDate);
headerDiv.appendChild(pageHeader);
headerDiv.appendChild(temp);
return headerDiv;
}

const headerContainer = document.querySelector('.header-container');
headerContainer.appendChild(headerDiv);