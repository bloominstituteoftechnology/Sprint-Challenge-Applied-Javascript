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

function createHeader() {
    const div = document.createElement('div');
    div.setAttribute('class', 'header')

    const span = document.createElement('span');
    span.setAttribute('class', 'date')
    span.textContent = "SMARCH 29, 2019"

    const h1 = document.createElement('h1');
    h1.textContent = 'Lambda Times'

    const span1 = document.createElement('span1');
    span1.setAttribute('class', 'temp')
    span1.textContent = "98"

    div.appendChild('span')
    div.appendChild('h1')
    div.appendChild('span1')
    return div
}

console.log(createHeader())
const component = createHeader()
const headerContainer = document.querySelector('.headerContainer')
headerContainer.appendChild(component)