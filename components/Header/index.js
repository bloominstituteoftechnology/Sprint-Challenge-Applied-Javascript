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

{/* <div class="header-container"></div> */ }

// Create and return a Header component
function Header(headerData) {
  const header = document.createElement('div')
  const theDate = document.createElement('span')
  const heading = document.createElement('h1')
  const temp = document.createElement('span')

  header.classList.add('header')
  theDate.classList.add('date')
  theDate.textContent = headerData.date
  heading.textContent= headerData.heading
  temp.classList.add('temp')
  temp.textContent = headerData.temp

  header.appendChild(theDate)
  header.appendChild(heading)
  header.appendChild(temp)

  return header
}

const headerData = { date: 'March 28, 2019', heading: 'Lambda Times', temp: '98°' }
const header = Header(headerData)
const headerContainer = document.querySelector('.header-container')

headerContainer.appendChild(header)