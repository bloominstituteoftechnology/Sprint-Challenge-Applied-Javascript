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

const headerContent = document.querySelector('.header-container')

headerContent.appendChild(createHeader())
// console.log(headerContent);

function createHeader() {

const headerDiv = document.createElement('div');
const headerDate = document.createElement('span');
const headerTitle = document.createElement('h1')
const headerTemp = document.createElement('span');

headerDiv.appendChild(headerDate);
headerDiv.appendChild(headerTitle);
headerDiv.appendChild(headerTemp);

headerDiv.classList.add('header')
headerDate.classList.add('date');
headerTemp.classList.add('temp');

headerDate.textContent = "October 4, 2019";
headerTitle.textContent = "Lambda Times";
headerTemp.textContent = "98°";

// console.log(headerDate);


return headerDiv;
};

