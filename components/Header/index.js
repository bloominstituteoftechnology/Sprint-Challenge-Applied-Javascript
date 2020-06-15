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
    const headerDiv = document.createElement('div');
    const headerDate = document.createElement('span');
    const titleHeader = document.createElement('h1');
    const headerTemp = document.createElement('span');

    headerDiv.appendChild(headerDate);
    headerDiv.appendChild(titleHeader);  
    headerDiv.appendChild(headerTemp);

    headerDiv.classList.add('header');
    headerDate.classList.add('date');
    headerTemp.classList.add('temp');

    headerDate.textContent = "MARCH 28, 2019";
    titleHeader.textContent = 'Lambda Times';
    headerTemp.textContent = '98°';

    return headerDiv;

}

const headerContainer = document.querySelector('.header-container');

headerContainer.appendChild(Header());
