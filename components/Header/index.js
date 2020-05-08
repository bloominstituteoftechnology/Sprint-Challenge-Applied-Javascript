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

    //Creating elements

    let header = document.createElement("div");

    let date = document.createElement("span");

    let title = document.createElement("h1");

    let temp = document.createElement("span");

    //Adding classes

    header.classList.add("header");

    date.classList.add("date");

    temp.classList.add("temp");

    //Appending

    header.appendChild(date);

    header.appendChild(title);

    header.appendChild(temp);

    //Adding values

    date.textContent = "SMARCH 28, 2019"; //Copied "SMARCH" straight from above

    title.textContent = "Lambda Times";

    temp.textContent = "98°";

    return header;

}

document.querySelector("div.header-container").appendChild(Header());