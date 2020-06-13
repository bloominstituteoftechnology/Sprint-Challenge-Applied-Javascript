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
    // create
    const head = document.createElement('div');
    const date = document.createElement('span');
    const title = document.createElement('h1');
    const temp = document.createElement('span');

    // append 
    head.appendChild(date);
    head.appendChild(title);
    head.appendChild(temp);

    // styling 
    head.classList.add('header');
    date.classList.add('date');
    temp.classList.add('temp');

    // values
    date.textContent='March 28, 2019';
    temp.textContent='98°';

    return head
}
const headCont=document.querySelector('.header-container');
headCont.appendChild(Header());