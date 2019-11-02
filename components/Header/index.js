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

const newHeader = document.querySelector('.header-container');

newHeader.appendChild(Header('SMARCH 28, 2019', 'Lambda Times', '98°'));


function Header() {

    //define new elements
    const head = document.createElement('div');
    const spam = document.createElement('span');
    const title = document.createElement('h1');
    const classSpan = document.createElement('span');

    //setup structure of elements
    head.appendChild(spam);
    head.appendChild(title);
    head.appendChild(classSpan);

    //set class names
    head.classList.add('header');
    spam.classList.add('date');
    title.classList.add('h1')
    classSpan.classList.add('temp');

    //set text content
    spam.textContent = 'SMARCH 28, 2019';
    title.textContent = 'Lambda Times';
    classSpan.textContent = '98°';
    
    return head;
}
