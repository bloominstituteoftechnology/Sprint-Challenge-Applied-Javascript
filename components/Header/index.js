// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container


function Header() {
//creating elements
    const mainHeader = document.createElement("div")
    const date = document.createElement("span")
    const headerTitle = document.createElement("h1")
    const temp = document.createElement("span")

//add the classes
    mainHeader.classList.add("header")
    date.classList.add("date")
    temp.classList.add("temp")

//add textContent
    date.textContent = "SMARCH 28, 2019"
    headerTitle.textContent = "Lambda Times" 
    temp.textContent = "98°"

//appendChild
    mainHeader.appendChild(date)
    mainHeader.appendChild(headerTitle)
    mainHeader.appendChild(temp)

//returning header
return mainHeader
}

//and append it to the DOM inside the div.header-container
const section = document.querySelector(".header-container")
section.append(Header());