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

const header_container = document.querySelector(".header-container");

function Header() {
    // CREATE ELEMENTS
    const header = document.createElement("div");
    const header_date = document.createElement("span");
    const header_h1 = document.createElement("h1");
    const header_temp = document.createElement("span");

    // ADD CLASSES
    header.classList.add("header");
    header_date.classList.add("date");
    header_temp.classList.add("temp");

    // ADD TEXT/VALUES
    header_date.textContent = `March 28, 2019`;
    header_h1.textContent = `Lambda Times`;
    header_temp.textContent = `98°`;

    // APPEND
    header.appendChild(header_date);
    header.appendChild(header_h1);
    header.appendChild(header_temp);

    header_container.appendChild(header);
}

Header();
