// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component


function Header(){
    const headerDiv = document.createElement('div')
    headerDiv.classList.add('header')

    const spanTag = document.createElement('span')
    spanTag.classList.add('date')
    spanTag.textContent = 'SMARCH 28, 2019'
    headerDiv.appendChild(spanTag)

    const hTitle = document.createElement('h1')
    hTitle.textContent='Lambda Times'
    headerDiv.appendChild(hTitle)

    const spanTemp = document.createElement('span')
    spanTemp.classList.add('temp')
    spanTemp.textContent='98°'

    return headerDiv

}

const headerContainer = document.querySelector('.header-container')
headerContainer.appendChild(Header())
