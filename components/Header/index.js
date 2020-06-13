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
const headerBody = document.querySelector('.header-container');

function Header(date,temp) {
    const headerDiv = document.createElement('div');
    const spanDate = document.createElement('span');
    const headerText = document.createElement('h1');
    const spanTemp = document.createElement('span');

    headerDiv.appendChild(spanDate);
    headerDiv.appendChild(headerText);
    headerDiv.appendChild(spanTemp);

    spanDate.textContent = date;
    spanTemp.textContent = temp;
    headerText.textContent = 'Lambda Times';

    headerDiv.classList.add('header');
    spanDate.classList.add('date');
    spanTemp.classList.add('temp');

    return headerDiv;
}

headerBody.appendChild(Header('March 28,2019','98°'));
