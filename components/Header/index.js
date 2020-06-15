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

const headerContainer = document.querySelector('.header-container');

function Header(todaysDate, headingContent, tempature)  {
    //Top div
    const header = document.createElement('div');
    header.classList.add('header');
    headerContainer.appendChild(header);
    //Date span
    const date = document.createElement('span');
    date.textContent = todaysDate;
    date.classList.add('date');
    header.appendChild(date);
    //h1 header
    const heading = document.createElement('h1');
    heading.textContent = headingContent;
    header.appendChild(heading);
    //Temp span
    const temp = document.createElement('span');
    temp.classList.add('temp');
    temp.textContent = tempature;
    header.appendChild(temp);

    console.log(header);
    return header;
}
 Header('June 14, 2020', 'Lamba Times', '78 degress')