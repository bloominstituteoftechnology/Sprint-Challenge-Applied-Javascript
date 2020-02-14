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

function Header() {}
    const header1 = () => {
    const header2 = document.createElement('div');
    const date = document.createElement('span');
    const title = document.createElement('h1');
    const temp = document.createElement('span');

    header2.appendChild(date);
    header2.appendChild(title);
    header2.appendChild(temp);

    header2.classList.add('header');
    date.classList.add('date');
    temp.classList.add('temp');

    date.textContent = 'Smarch 28, 2019';
    title.textContent = 'Lambda Times';
    temp.textContent = '98';

    return header2
}

const container = document.querySelector('.header-container')

container.appendChild(header1())