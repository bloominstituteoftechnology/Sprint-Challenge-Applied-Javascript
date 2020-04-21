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
    const dateSpan = document.createElement('span');
    const headerTitle = document.createElement('h1');
    const tempSpan = document.createElement('span');

    dateSpan.textContent = 'MARCH 28, 2019';
    headerTitle.textContent = 'Lambda Times';
    tempSpan.textContent = '98°'

    headerDiv.appendChild(dateSpan);
    headerDiv.appendChild(headerTitle);
    headerDiv.appendChild(tempSpan);

    headerDiv.classList.add('header');
    dateSpan.classList.add('date');
    tempSpan.classList.add('temp');

    return headerDiv
}

const head = document.querySelector('.header-container')

head.appendChild(Header());
