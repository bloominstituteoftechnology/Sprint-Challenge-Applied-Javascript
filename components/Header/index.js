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
    let header = document.createElement('div');
    header.classList.add('header');
    let span = document.createElement('span');
    span.classList.add('date');
    let h1 = document.createElement('h1');
    let spanTemp = document.createElement('span');
    spanTemp.classList.add('temp');

    let container = document.querySelector('.header-container');
    container.appendChild(header);
    header.appendChild(span);
    header.appendChild(h1);
    header.appendChild(spanTemp);

    return header;
}
