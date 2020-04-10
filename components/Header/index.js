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

let headerContainer = document.querySelector('.header-container')

function header(headerDate, headerTitle, headerTemp) {

    //creating elemetns
    const mainHeader = document.createElement('div')
    const date = document.createElement('span')
    const mainHeaderTitle = document.createElement('h1')
    const temp = document.createElement('span')

    //adding classes
    mainHeader.classList.add('header')
    date.classList.add('date')
    temp.classList.add('temp')

    //adding the content 
    date.textContent = headerDate
    mainHeaderTitle.textContent = headerTitle
    temp.textContent = headerTemp
    
    //appearing in the DOM
    headerContainer.appendChild(mainHeader)
    mainHeader.appendChild(date)
    mainHeader.appendChild(mainHeaderTitle)
    mainHeader.appendChild(temp)

    return mainHeader
}

header('SMARCH 28, 2019', 'Lambda Times', '98°')
