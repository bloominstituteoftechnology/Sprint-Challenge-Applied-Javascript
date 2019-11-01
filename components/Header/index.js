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
    const headerFirstSpan = document.createElement('span');
    const headerH1 = document.createElement('h1');
    const headerSecondSpan = document.createElement('span');

    headerDiv.appendChild(headerFirstSpan);
    headerDiv.appendChild(headerH1);
    headerDiv.appendChild(headerSecondSpan);

    headerDiv.classList.add('header');
    headerFirstSpan.classList.add('date');
    headerSecondSpan.classList.add('temp');

    headerFirstSpan.textContent = 'SMARCH 28, 2019';
    headerH1.textContent = 'Lambda Times';
    headerSecondSpan.textContent = '98°';



}
