// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

const headerContainer = document.querySelector(".header-container");

function Header(date, title, temp) {

// create elments
const headerDiv = document.createElement("div"),
    dateSpan = document.createElement("span"),
    headerTitle = document.createElement("h1"),
    tempSpan = document.createElement("span");

// text content
dateSpan.textContent = date;
headerTitle.textContent = title;
tempSpan.textContent = temp;

// append
headerDiv.append(dateSpan, headerTitle, tempSpan);

// classes
headerDiv.classList.add("header");
dateSpan.classList.add("date");
tempSpan.classList.add("temp");




return headerDiv

}

headerContainer.append(Header("SMARCH 28, 2019", "Lambda Times", "98°"));