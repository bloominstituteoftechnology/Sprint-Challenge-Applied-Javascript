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

function Header() {
    const headR = document.createElement('div')
    const date = document.createElement('span')
    const title = document.createElement('h1')
    const weather = document.createElement('span')

    headR.appendChild(date)
    headR.appendChild(title)
    headR.appendChild(weather)

    headR.classList.add('header')
    date.classList.add('date')
    weather.classList.add('temp')

    date.textContent = 'March 20, 2020'
    title.textContent = 'Lambda Times'
    weather.textContent = 'Covid-19 Ed. 98°'
    
    return headR;
}

const header_container = document.querySelector('.header-container')
header_container.appendChild(Header())