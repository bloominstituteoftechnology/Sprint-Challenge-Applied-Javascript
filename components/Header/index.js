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
    const headerDiv = document.createElement('div')
    headerDiv.classList.add('header')

    const date = document.createElement('span')
    date.classList.add('date')
    date.textContent = 'SMARCH 28, 2019'

    const Lambda = document.createElement('h1')
    Lambda.textContent = 'Lambda Times'

    const temp = document.createElement('span')
    temp.classList.add('temp')
    temp.textContent = '98°'

    headerDiv.appendChild(date)
    headerDiv.appendChild(Lambda)
    headerDiv.appendChild(temp)

    return headerDiv;

}
const headerContainer = document.querySelector(".header-container")
    headerContainer.prepend(Header())