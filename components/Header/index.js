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

const containHead = document.querySelector('.header-container');
const elementHead = Header()
containHead.append(elementHead)

function Header(){
    const header = document.createElement('div');
    const date = document.createElement('span');
    const title = document.createElement('h1');
    const temp = document.createElement('span');

    date.textContent = 'MARCH, 28 2019';
    temp.textContent = '98°'
    title.textContent =  'Lambda Times'

    header.classList.add('header');
    date.classList.add('date');
    temp.classList.add('temp');

    header.appendChild(date);
    header.appendChild(title);
    header.appendChild(temp);

    console.log(Header);

    return header
}
