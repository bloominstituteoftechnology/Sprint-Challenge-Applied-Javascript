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

let headContain = document.querySelector('.header-container');
function Header() {
    //create elements
    let header = document.createElement('div');
    let dateSpan = document.createElement('span');
    let logo = document.createElement('h1');
    let temp = document.createElement('span');

    //add class to certain elements
    header.classList.add('header');
    dateSpan.classList.add('date');
    temp.classList.add('temp');

    //add content to certain elements
    dateSpan.textContent = "SMARCH 28, 2019";
    logo.textContent = "Lambda Times";
    temp.textContent = "98°";

    //apprend to correct places
    headContain.appendChild(header);
    header.append(dateSpan, logo, temp);
}
Header();