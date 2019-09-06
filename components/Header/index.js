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
    const
        heady = document.createElement('div'),
        date = document.createElement('span'),
        title = document.createElement('h1'),
        temp = document.createElement('span')

    heady.appendChild(date);
    heady.appendChild(title);
    heady.appendChild(temp);

    heady.classList.add('header');
    date.classList.add('date');
    temp.classList.add('temp');

    date.textContent = `SMARCH 28, 2019`;
    title.textContent = `Lambda Times`;
    temp.textContent = `98°`;



    return heady;
}

let entryPoint = document.querySelector('.header-container');
const newHeader = Header();
entryPoint.appendChild(newHeader);



