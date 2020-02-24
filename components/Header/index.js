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
    const topHeader = document.createElement('div');
    topHeader.classList.add('header');

    const date = document.createElement('span');
    date.classList.add('date');
    date.textContent = "SMARCH 28, 2019";
    // console.log(date);

    const header1 = document.createElement('h1');
    header1.textContent = 'Lambda Times';
    // console.log(header1);

    const temp = document.createElement('span');
    temp.classList.add('temp');
    temp.textContent = '98°';
    // console.log(temp);

    topHeader.appendChild(date);
    topHeader.appendChild(header1);
    topHeader.appendChild(temp);

    return topHeader;
}

const headContainer = document.querySelector('.header-container');

const newHeader = Header();
headContainer.appendChild(newHeader);