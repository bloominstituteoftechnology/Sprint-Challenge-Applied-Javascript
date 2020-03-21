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


    //Create Elements
    let hedz = document.createElement('div');
    let date = document.createElement('span');
    let highlight = document.createElement('h1');
    let temp = document.createElement('span');

    //AppendChild

    hedz.appendChild(date);
    hedz.appendChild(highlight);
    hedz.appendChild(temp);

    //Add Class

    hedz.classList.add('header');
    date.classList.add('date');
    temp.classList.add('temp');

    //Add Content

    date.textContent = "SMARCH 28, 2019";
    highlight.textContent = "Lambda Times";
    temp.textContent = "98°";

    return hedz;


}


const newHed = document.querySelector('.header-container');


newHed.appendChild(header());