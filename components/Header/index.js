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
    const headDiv = document.createElement('div');
    const headSpan = document.createElement('span');
    const headH1 = document.createElement('h1');
    const headSpan2 = document.createElement('span')

    headDiv.classList.add('header');
    headSpan.classList.add('date');
    headSpan2.classList.add('temp');

    headSpan.textContent = 'March 28, 2019';
    headH1.textContent = 'Lambda Times';
    headSpan2.textContent = '98 \u00b0';

    headDiv.appendChild(headSpan);
    headDiv.appendChild(headSpan);
    headDiv.appendChild(headH1);
    headDiv.appendChild(headSpan2)

return headDiv


}
const headerCont = document.querySelector('.header-container');
headerCont.appendChild(Header());
