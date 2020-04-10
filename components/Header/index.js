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
    const container = document.createElement('div');
    const title = document.createElement('h1');
    const date = document.createElement('span');
    const temp = document.createElement('span');
    container.classList.add('header');
}
