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

    const newHead = document.createElement("div");
    const dateSpan = document.createElement("span");
    const title = document.createElement("h1");
    const tempSpan = document.createElement("span");

    dateSpan.textContent = "SMARCH 28, 2019";
    title.textContent = "Lambda Times";
    tempSpan.textContent = "98°";

    newHead.classList.add("header");
    dateSpan.classList.add("date");
    title.classList.add("h1");
    tempSpan.classList.add("temp");

    newHead.appendChild(dateSpan);
    newHead.appendChild(title);
    newHead.appendChild(tempSpan);

    return newHead;
}

const headAnchor = document.querySelector(".header-container");
let newHeader = Header();

headAnchor.appendChild(newHeader);