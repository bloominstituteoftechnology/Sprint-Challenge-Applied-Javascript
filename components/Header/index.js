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
    //  create header container
    const header = document.createElement('div');
    header.className = 'header';

    //  create date container
    const date = document.createElement('span');
    date.className = 'date';
    date.textContent = "SMARCH 28, 2019";

    header.appendChild(date);

    // create header text
    const headerContent = document.createElement('h1');
    headerContent.textContent = "Lambda Times";

}
