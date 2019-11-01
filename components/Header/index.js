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
    const headerHtlm = document.getElementsByClassName('header-container')[0];
    const header = document.createElement('div')
    const span = document.createElement('span')
    const headerTitle = document.createElement('h1')
    const spanTwo = document.createElement('span')

    header.classList.add('header');
    span.classList.add('date');
    spanTwo.classList.add('temp');

    span.textContent = "SMARCH 28, 2019";
    headerTitle.textContent = "Lambda Times";
    spanTwo.textContent = "98°";
    
    header.appendChild(span);
    header.appendChild(headerTitle);
    header.appendChild(spanTwo);
    headerHtlm.appendChild(header);
}

Header();