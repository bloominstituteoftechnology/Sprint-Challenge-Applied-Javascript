// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

const headerC = document.querySelector('.header-container')

function Header() {
   const divE = document.createElement('div')
    divE.classList.add('header')

    const spanTags = [];
    for(let i = 0; i < 2; i++){
        spanTags.push(document.createElement('span'));
    }
    spanTags[0].classList.add('date');
    spanTags[0].textContent = `March 28, 2019 `;

    spanTags[1].classList.add('temp');
    spanTags[1].textContent = '98° ';

    const h1 = document.createElement('h1');
    h1.textContent = 'Lambda Times';

    divE.appendChild(spanTags[0]);
    divE.appendChild(h1);
    divE.appendChild(spanTags[1])
    headerC.appendChild(divE);

    
    return divE;
}

Header();



