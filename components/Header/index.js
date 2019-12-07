// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header(data) {
    const newHeader = document.createElement('div')
    const newSpan = document.createElement('span')
    const newH1 = document.createElement('h1')
    const spanTwo = document.createElement('span')

    newHeader.classList.add('header')
    newSpan.classList.add('date')
    spanTwo.classList.add('temp')

    newSpan.textContent = 'March 28, 2019'
    spanTwo.textContent = '98 \xB0'




    newHeader.appendChild(newSpan)
    newHeader.appendChild(spanTwo)





    return newHeader
}
const entryPoint = document.querySelector('.header-container')
entryPoint.appendChild(Header()) 
