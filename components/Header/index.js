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


//element
function Header() {
    const mainHeader = document.createElement('div');
    const date = document.createElement('span');
    const headerTitle = document.createElement('h1');
    const temp = document.createElement('span');


// class
mainHeader.classList.add('header');
date.classList.add('date');
temp.classList.add('temp');

// append
mainHeader.appendChild(date);
mainHeader.appendChild(headerTitle);
mainHeader.appendChild(temp);

// content
date.textContent = "SMARCH 28, 2019";
headerTitle.textContent = "Lambda Times";
temp.textContent = "98°";

return mainHeader;
}

const topHeader = document.querySelector('.header-container');
topHeader.prepend(Header());