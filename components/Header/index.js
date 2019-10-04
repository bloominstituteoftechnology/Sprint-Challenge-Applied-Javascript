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

const
header = document.createElement('div'),
date = document.createElement('span'),
headerH1 = document.createElement('h1'),
tempSpan = document.createElement('span');

header.classList.add('header')
date.classList.add('date')
tempSpan.classList.add('temp')

date.textContent = 'SMARCH 28, 2019'
headerH1.textContent = 'Lambda Times'
tempSpan.textContent = '98'

header.appendChild(date)
header.appendChild(headerH1)
header.appendChild(tempSpan)

return header
}

const headerContainer = document.querySelector('.header-container');

headerContainer.appendChild(Header());
