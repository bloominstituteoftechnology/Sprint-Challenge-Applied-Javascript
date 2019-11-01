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
const header = document.querySelector('.header-container')
function Header() {
let
headerMain = document.createElement('div')
spanDate = document.createElement('span')
titleH1 = document.createElement('h1')
spanTemp = document.createElement('span')

//-----classes-----//
headerMain.classList.add('header')
spanDate.classList.add('date')
spanTemp.classList.add('temp')

//------content--------//
spanDate.textContent = 'March 28, 2019';
titleH1.textContent = 'Lambda Times';
spanTemp.textContent = '98°';

//-----appends-------//
headerMain.appendChild(spanDate)
headerMain.appendChild(titleH1)
headerMain.appendChild(spanTemp)


return headerMain

}

header.append(Header())
