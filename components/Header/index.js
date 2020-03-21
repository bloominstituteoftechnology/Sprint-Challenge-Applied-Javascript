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

    const theHeader = document.createElement("div");
    const date = document.createElement("span");
    const title = document.createElement("h1");
    const temp = document.createElement("span");

    date.textContent = "MARCH 28, 2019";
    title.textContent = "Lambda Times";
    temp.textContent = "98°";

    theHeader.classList.add("header");
    date.classList.add("date");
    title.classList.add("h1");
    temp.classList.add("temp");

    theHeader.appendChild(date);
    theHeader.appendChild(title);
    theHeader.appendChild(temp);

    return theHeader;
}

const headAnchor = document.querySelector(".header-container");
let theHeader = Header();

headAnchor.appendChild(theHeader);
