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

    const mainHead = document.createElement('div');
    const dateHead = document.createElement('span');
    const titleHead = document.createElement('h1');
    const tempHead = document.createElement('span');

    mainHead.appendChild(dateHead);
    mainHead.appendChild(titleHead);
    mainHead.appendChild(tempHead);

    mainHead.classList.add('header');
    dateHead.classList.add('date');
    tempHead.classList.add('temp');

    dateHead.textContent = 'February 21, 2020';
    titleHead.textContent = 'Lambda Times';
    tempHead.textContent = '98°'

    return mainHead;
    }
    //test
    const headerParent = document.querySelector('.header-container');

    headerParent.appendChild(Header());