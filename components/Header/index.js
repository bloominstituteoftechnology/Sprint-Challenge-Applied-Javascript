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

    // elements
    const headerDiv = document.createElement('div');
    const date = document.createElement('span');
    const h1 = document.createElement('h1');
    const temp = document.createElement('span');

    //structure
    headerDiv.appendChild(date);
    headerDiv.appendChild(h1);
    headerDiv.appendChild(temp);
    
    //content
    date.textContent = 'SMARCH 28, 2019';
    h1.textContent = 'Lambda Times';
    temp.textContent = '98 Degrees';
    
    //style
    headerDiv.classList.add('header');
    date.classList.add('date');
    temp.classList.add('temp');
    
    return headerDiv;

}

const siteHeader = document.querySelector(".header-container");
siteHeader.appendChild(Header());



