// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component


const head = document.querySelector('.header-container');
function Header(arr) {
    const divHead = document.createElement('div');
    const spanHead = document.createElement('span');
    const h1Head = document.createElement('h1');
    const span2Head = document.createElement('span');

    head.appendChild(divHead);
    divHead.appendChild(spanHead);
    divHead.appendChild(h1Head);
    divHead.appendChild(span2Head);

    divHead.classList.add('header');
    spanHead.classList.add('date');
    span2Head.classList.add('temp');

    spanHead.textContent = 'MARCH 28, 2019';
    h1Head.textContent = 'Lambda Times';
    span2Head.textContent = '98°';

    return divHead
}

