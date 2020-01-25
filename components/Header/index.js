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
    //create Header Component
    const head = document.createElement('div');
    const span1 = document.createElement('span');
    const h1 = document.createElement('h1');
    const span2 = document.createElement('span');
    const header = document.querySelector('.header-container');

    //Add classList
    head.classList.add('header');
    span1.classList.add('date');
    span2.classList.add('temp');

    //Add textContent
    span1.textContent = 'August 16,2019';
    h1.textContent = 'Lambda Times';
    span2.textContent = ('98');

    head.appendChild(span1);
    head.appendChild(h1);
    head.appendChild(span2);
    header.appendChild(head);
}
Header()
