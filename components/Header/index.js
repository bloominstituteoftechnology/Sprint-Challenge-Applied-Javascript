// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
// And add it to the DOM in the .header-container component

const headerContainer = document.querySelector(".header-container")

function Header() {
    //variables

    const headerDiv = document.createElement("div");
    const date = document.createElement("span");
    const lambdaHeader = document.createElement("h1");
    const temperature = document.createElement("span");

    //classes

    headerDiv.classList.add("header")
    date.classList.add("date")
    temperature.classList.add("temp")

    //appending

    headerContainer.append(headerDiv);
    headerDiv.append(date);
    headerDiv.append(lambdaHeader);
    headerDiv.append(temperature);

    //text

    date.textContent = "MARCH 28, 2019"
    lambdaHeader.textContent = "Lambda Times"
    temperature.textContent = "98°"

    return headerDiv;
}

Header();
