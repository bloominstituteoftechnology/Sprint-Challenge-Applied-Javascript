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


headcont = document.querySelector('.header-container');

function Header() {
    const heading = document.createElement('div');
    heading.classList.add('header');

    const date = document.createElement('span');
    date.classList.add('date');
    date.textContent = 'SMARCH 28, 2019';

    const headLine = document.createElement('h1');
    headLine.textContent = 'Lambda Times';

    const temp = document.createElement('span');
    temp.classList.add('temp');
    temp.textContent = '98°';

    headcont.appendChild(heading);
    heading.appendChild(date);
    heading.appendChild(headLine);
    heading.appendChild(temp);
    


};


console.log(Header());





