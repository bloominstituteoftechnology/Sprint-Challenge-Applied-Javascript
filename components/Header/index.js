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
    let theHeader = document.createElement("header")
    theHeader.classList.add("header")

    let theDate = document.createElement("span")
    theDate.classList.add("date")
    theHeader.appendChild(theDate)
    theDate.textContent = `Date ${data.theDate}`

    let title = document.createElement("h1")
    title.textContent = `${data.title}`
    theDate.appendChild(title)

    let theTemp = document.createElement("span")
    theTemp.classList.add("temp")
    title.appendChild(theTemp)
    theTemp.textContent = `${data.theTemp}`
}
