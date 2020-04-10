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
    const headerEntry = document.querySelector('.header-container')

function Header() {
    // create elements
    const headerDiv = document.createElement('div');
    const headerSpanOne = document.createElement('span');
    const headerH = document.createElement('h1');
    const headerSpanTwo = document.createElement('span');
    //nest elements
    headerDiv.appendChild(headerSpanOne);
    headerDiv.appendChild(headerH);
    headerDiv.appendChild(headerSpanTwo);
    //class names
    headerDiv.classList.add('header');
    headerSpanOne.classList.add('date');
    headerSpanTwo.classList.add('temp')
    //text content
    headerSpanOne.textContent = `SMARCH 28, 2019`
    headerH.textContent = `Lambda Times`
    headerSpanTwo.textContent = `98`
    //final append
    headerEntry.appendChild(headerDiv)
    //return statement
    return Header
}
Header();