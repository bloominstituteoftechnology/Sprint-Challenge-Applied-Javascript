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
    const headerDiv = document.createElement("div")
    headerDiv.className = "header"
    const dateSpan = document.createElement("span")
    dateSpan.className = "date"
    dateSpan.textContent = "MARCH 28, 2019"
    const h1 = document.createElement("h1")
    h1.textContent = "Lambda Times"
    const tempSpan = document.createElement("span")
    tempSpan.className = "temp"
    tempSpan.textContent = "98°"
    const headerDivChildren = [dateSpan, h1, tempSpan]
    headerDivChildren.forEach((child) => headerDiv.appendChild(child))
    return headerDiv
}

document.querySelector(".header-container").appendChild(Header())