// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
    
    const header = document.createElement('div');
    const spanDate = document.createElement('span')
    const mainTitle = document.createElement('h1')
    const spanTemp = document.createElement('span');

    header.appendChild(spanDate);
    header.appendChild(mainTitle);
    header.appendChild(spanTemp);

    spanDate.textContent = 'March 28, 2019'
    mainTitle.textContent = 'Lambda Times'
    spanTemp.textcontent = '98,\u00B0'


    return header;
}
const headerContainer = document.querySelector('.header-container')
headerContainer.appendChild(Header);
    


