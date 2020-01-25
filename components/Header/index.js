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
    const header = document.createElement('div');
    header.classList.add('header');
    const date = document.createElement('span');
    date.classList.add('date');
    const today = new Date();
    date.textContent = today.toDateString();
    const h1 = document.createElement('h1');
    h1.textContent = 'Lamda Times';
    const temp = document.createElement('span');
    temp.classList.add('temp');
    temp.textContent = '98°';
    

    header.appendChild(date);
    header.appendChild(h1);
    header.appendChild(temp);

    return header;
}

const headerContainer = document.querySelector('.header-container');
headerContainer.appendChild(Header());

