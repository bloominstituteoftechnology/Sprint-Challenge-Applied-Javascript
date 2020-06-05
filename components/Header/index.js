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

function header() {
    // CREATE THE ELEMENTS
    const headerDiv = document.createElement("div")
    const headerSpanDate = document.createElement("span")
    const headerHeading = document.createElement("h1")
    const headerSpanTemp = document.createElement("span")

    // CREATE THE CLASSES
    headerDiv.classList.add("header")
    headerSpanDate.classList.add("date")
    headerSpanTemp.classList.add("temp")

    // CREATE THE TEXT CONTENT
    headerSpanDate.textContent = "March 28, 2019"
    headerHeading.textContent = "Lambda Times"
    headerSpanTemp.innerHTML = "98&deg;"

    // APPEND ELEMENTS
    headerDiv.appendChild(headerSpanDate)
    headerDiv.appendChild(headerHeading)
    headerDiv.appendChild(headerSpanTemp)

    return headerDiv;
}

const headerContainerDiv = document.querySelector(".header-container")

headerContainerDiv.appendChild(header())
