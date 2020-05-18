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
    const header = document.createElement('div')
    const headerDate = document.createElement('span')
    const headerH1 = document.createElement('h1')
    const headerTemp = document.createElement('span')

    header.appendChild(headerDate)
    header.appendChild(headerH1)
    header.appendChild(headerTemp)

    header.classList.add('header')
    headerDate.classList.add('date')
    headerTemp.classList.add('temp')

    headerDate.textContent = 'MARCH 28, 2019'
    headerH1.textContent = 'Lambda Times'
    headerTemp.textContent = '98°'

    return header;
}

const headerContainer = document.querySelector('.header-container');
headerContainer.append(Header());