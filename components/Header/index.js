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

const makeHeader = () => {
    const header1 = document.createElement("div");
    header1.classList.add("header");

    const dateSpan = document.createElement("span");
    dateSpan.classList.add("date");
    dateSpan.textContent = "MARCH 28, 2019";
    header1.appendChild(dateSpan);

    const title = document.createElement("h1");
    title.textContent = "Lambda Times";
    header1.appendChild(title);

    const tempSpan = document.createElement("span");
    tempSpan.classList.add("temp");
    tempSpan.textContent = "98°";
    header1.appendChild(tempSpan);

    return header1;
};

const headerDiv = document.querySelector(".header-container");
headerDiv.appendChild(makeHeader());
