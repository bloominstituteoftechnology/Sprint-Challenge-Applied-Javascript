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

const mainHeader = document.querySelector(`.header-container`);

function createHeader() {
//Elemnets 
    const header = document.createElement(`div`);
    const headerDate = document.createElement(`span`);
    const headerTitle  = document.createElement(`h1`);
    const headerTemp = document.createElement(`span`);

// classlists to elements 

headerDate.classList.add(`date`);
headerTemp.classList.add(`temp`);
header.classList.add (`header`);

// content to elements

headerDate.textContent = `MARCH 28, 2019`;
headerTitle.textContent = `Lambda Times`;
headerTemp.textContent = `98°`;

// appending 

header.appendChild(headerDate);
header.appendChild(headerTitle);
header.appendChild(headerTemp);


return header;


}

mainHeader.appendChild(createHeader());