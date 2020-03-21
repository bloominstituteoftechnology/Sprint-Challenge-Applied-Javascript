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

    const headerContainer = document.querySelector('.header-container');
    const headerDiv = document.createElement('div');
    headerDiv.classList.add('header');
    headerContainer.appendChild(headerDiv);

    const span = document.createElement('span');
    span.classList.add('date');
    span.textContent = 'Friday, March 20, 2020';
    headerDiv.appendChild(span);

    const h1 = document.createElement('h1');
    h1.textContent = 'Lambda Times';
    headerDiv.appendChild(h1);

    const spanTemp = document.createElement('temp');
    spanTemp.textContent = '98°';
    headerDiv.appendChild(spanTemp);

    return headerDiv;
}

Header();