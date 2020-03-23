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
const myHeader = document.querySelector(".header-container")
myHeader.appendChild(Header())

function Header() {
    const container = document.createElement("div")
    const date = document.createElement("span")
    const head = document.createElement("h1")
    const temperature = document.createElement("span")

    container.append(date, head, temperature)

    container.classList.add("header")
    date.classList.add("date")
    temperature.classList.add("temp")

    date.textContent = "SMARCH 28, 2019"
    head.textContent = "Lambda Times"
    temperature.textContent = "98°"

    return container
}
