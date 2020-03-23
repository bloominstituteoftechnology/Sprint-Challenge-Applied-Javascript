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

const container = document.querySelector('.header-container')

function headerCreator() {
    const heads = document.createElement('div')
    const dates = document.createElement('span')
    const times = document.createElement('h1')
    const temps  = document.createElement('span')
    
    heads.classList.add('header')
    dates.classList.add('date')
    dates.textContent = 'MARCH 28, 2019' // SMARCH ?!?
    times.textContent = 'Lambda Times'
    temps.classList.add('temp')
    temps.textContent = '98°'
    
    heads.appendChild(dates)
    heads.appendChild(times)
    heads.appendChild(temps)
    
    return heads
}

container.appendChild(headerCreator())