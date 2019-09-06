// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

function Header() {

    const header = document.createElement('div');
    header.classList.add('header');

    const dateSpan = document.createElement('span');
    dateSpan.classList.add('date');
    dateSpan.innerText = "MARCH 28, 2019";

    const title = document.createElement('h1');
    title.innerText = "Lambda Times";

    const tempSpan = document.createElement('span');
    tempSpan.innerText = "98°"

    const headerContainer = document.querySelector('.header-container');

    headerContainer.appendChild(header);
    header.appendChild(dateSpan);
    header.appendChild(title);
    header.appendChild(tempSpan);

    console.log(header)

    return header;
}

Header();
