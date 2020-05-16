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

function Header(date, title, temp) {
    //creating header elements
    const headerDiv = document.createElement('div')
    const headerDate = document.createElement('span')
    const headerH1 = document.createElement('h1')
    const headerTemp = document.createElement('span')

    //adding clases
    headerDiv.classList.add('header')
    headerDate.classList.add('date')
    headerTemp.classList.add('temp')

    //assigning content
    headerDate.textContent = date
    headerH1.textContent = title
    headerTemp.textContent = temp
    
    //adding html structure to headerDiv
    headerDiv.append(headerDate, headerH1, headerTemp)

    return headerDiv

}

const headerComponent = Header('May 15th', 'Lambda Times', '98°')
const headerEntryPoint = document.querySelector('.header-container')
headerEntryPoint.append(headerComponent)



