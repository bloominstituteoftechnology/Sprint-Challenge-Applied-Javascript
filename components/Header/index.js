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

const headContainer = document.querySelector('.header-container');

function Header() {
    const head = document.createElement('div');
    head.classList.add('header');

    const dateSpan = document.createElement('span');
    dateSpan.classList.add('date');
    dateSpan.textContent = 'MARCH 28, 2019';

    const headText = document.createElement('h1');
    headText.textContent = 'Lambda Times';

    const tempSpan = document.createElement('span');
    tempSpan.classList.add('temp');
    tempSpan.textContent = '98°';

    head.append(dateSpan); 
    head.append(headText);
    head.append(tempSpan);

    return head; 
}

headContainer.append(Header()); 
