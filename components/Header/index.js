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
    let header = document.createElement("div");
    header.classList.add("header");

    let date = document.createElement("span");
    date.textContent = "DECEMBER 6, 2019"
    date.classList.add("date");
    header.appendChild(date);

    let title = document.createElement("h1");
    title.textContent = "Lambda Times"
    header.appendChild(title);

    let temp = document.createElement("span");
    temp.textContent = "98°"
    temp.classList.add("temp");
    header.appendChild(temp);

    return header;
}

document.querySelector(".header-container").appendChild(Header());


