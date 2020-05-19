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

//Entry Point
entryPoint = document.querySelector('.header-container')
function Header() {
    //Create Elements
    const header = document.createElement('div')
    const spanOne = document.createElement('span')
    const hOne = document.createElement('h1')
    const spanTwo = document.createElement('span')
    //Text Content
    spanOne.textContent = 'SMARCH 28, 2019';
    hOne.textContent = 'Lambda Times';
    spanTwo.textContent = '98°';
    //Class names
    header.classList.add('header')
    spanOne.classList.add('date')
    spanTwo.classList.add('temp')
    //Appending
    header.append(spanOne)
    header.append(hOne)
    header.append(spanTwo)
    //Return
    return header
}

entryPoint.append(Header())

console.log(Header())