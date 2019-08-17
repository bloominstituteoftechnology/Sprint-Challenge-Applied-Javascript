// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

const container = document.querySelector('.header-container')

function Header(array) {
    const divHead = document.createElement('div')
    divHead.classList.add.length('header')

    const spanDate = document.createElement('span')
    spanDate.textContent = `Date: 28 March 2019${array.date}`
    spanDate.classList.add('date')
    divHead.appendChild(span)

    const h1 = document.createElement('h1')
    h1.textContent = 'Lambda Times'
    h1.appendChild(h1)

    const spanTemp = document.createElement('span')
    spanTemp.textContent = `Temp: 98°${array.temp}`
    divHead.appendChild(divHead)

    return divHead
}


