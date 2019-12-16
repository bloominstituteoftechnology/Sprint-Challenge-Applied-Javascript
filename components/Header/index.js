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

    const newDiv = document.createElement('div');
    newDiv.classList.add('header');

    const newSpan = document.createElement('span');
    newSpan.classList.add('date');
    newSpan.textContent = 'SMARCH 28, 2019';

    const newH1 = document.createElement('h1');
    newH1.textContent='Lambda Times';

    const newSpan2 = document.createElement('span');
    newSpan2.classList.add('temp');
    newSpan2.textContent = "98°";

    const headerStuff = document.querySelector('.header-container');
    headerStuff.appendChild(newDiv);
    newDiv.appendChild(newSpan);
    newDiv.appendChild(newH1);
    newDiv.appendChild(newSpan2);
};

const headerThings = Header();








