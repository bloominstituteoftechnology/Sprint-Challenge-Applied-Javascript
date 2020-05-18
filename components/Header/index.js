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

let theEntry = document.querySelector('.header-container')

function Header (data){

const bigDiv = document.createElement('div')
const date = document.createElement('span')
const headline = document.createElement('h1')
const temp = document.createElement('span')

bigDiv.classList.add('header')
date.classList.add('date')
temp.classList.add('temp')

theEntry.append(bigDiv)
bigDiv.append(date, headline, temp)

date.textContent = "SMARCH 28, 2019"
headline.textContent = "Lambda Times"
temp.textContent = "98*"

return bigDiv
}
Header()