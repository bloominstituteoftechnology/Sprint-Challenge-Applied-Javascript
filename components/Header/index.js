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

function Header(object) {
    let header = document.createElement('header');
    let date = document.createElement('span');
    let title = document.createElement('h1');
    let temp = document.createElement('span');

    header.classList.add('header');
    date.classList.add('date');
    temp.classList.add('temp');

    date.textContent = object.date;
    title.textContent = object.title;
    temp.textContent = object.temp;

    header.appendChild(date);
    header.appendChild(title);
    header.appendChild(temp);
    
    return header;
}

let headerContainer = document.querySelector('.header-container');
headerContainer.appendChild(Header('header'));
headerContainer.appendChild(Header('date'));
headerContainer.appendChild(Header('title'));
headerContainer.appendChild(Header('temp'));