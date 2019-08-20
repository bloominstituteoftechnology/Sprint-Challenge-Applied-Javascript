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

function Header() {
    let divHead = document.createElement('div')
    divHead.classList.add('header')

    let date = document.createElement('span')
    date.classList.add('date')
    date.textContent = 'Date: 28 March 2019'
    divHead.appendChild(date)

    let h1 = document.createElement('h1')
    h1.classList.add('h1')
    h1.textContent = 'Lambda Times'
    divHead.appendChild(h1)

    let spanTemp = document.createElement('span')
    spanTemp.textContent = 'Temp: 98°'
    divHead.appendChild(spanTemp)

    return divHead
}

document.querySelector('.header-container').appendChild(Header())
