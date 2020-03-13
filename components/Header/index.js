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
    const header = document.createElement("div");
    const date = document.createElement("span");
    const h1Title = document.createElement("h1");
    const temp = document.createElement("span");

    //add append
    header.append(date, h1Title, temp);

    // add classes
    header.classList.add("header");
    date.classList.add("date");
    temp.classList.add("temp");

    // add content
    date.textContent = "SMARCH 28, 2019";
    h1Title.textContent = "Lambda Times";
    temp.textContent = "98*"

    return header;
}


const headContainer = document.querySelector(".header-container"); //you are creating the link
headContainer.append(Header());