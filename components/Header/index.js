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

const theHeader = document.querySelector('.header-container');

function Header() {

const newHeader = document.createElement('div'),
      date = document.createElement('span'),
      headerOne = document.createElement('h1'),
      temperature = document.createElement('span')

//append
newHeader.appendChild(date);
newHeader.appendChild(headerOne);
newHeader.appendChild(temperature);

newHeader.classList.add('header');
date.classList.add('date');
temperature.classList.add('temp');

date.textContent = `MARCH 28, 2019`;
headerOne.textContent = `Lambda Times`;
temperature.textContent = `98°`;

return newHeader;

}

theHeader.appendChild(Header());
