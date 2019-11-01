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

const container = document.querySelector('.header-container');
function Header() {

    const Head = document.createElement('div');
    Head.classList.add('header');

    const classDate = document.createElement('span');
    classDate.classList.add('date');
    classDate.textContent = 'MARCH 28, 2019';

    const myH1 = document.createElement('h1');
    myH1.textContent = 'Lambda Times';

    const classTemp = document.createElement('span');
    classTemp.classList.add('temp');
    classTemp.textContent = '98°';

    Head.appendChild(classDate);
    Head.appendChild(myH1);
    Head.appendChild(classTemp);
    
    container.appendChild(Head);
    
    
}
Header();