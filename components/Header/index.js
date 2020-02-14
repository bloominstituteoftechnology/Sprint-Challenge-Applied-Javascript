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

let divone = document.createElement("div")
function Header() {
    let spanone = document.createElement("span")
   let timesone = document.createElement("h1")
   let spantemp = document.createElement("span")
    divone.classList.add("header"); 
    spanone.classList.add("date");
    spantemp.classList.add("temp");
    spanone.textContent = "SMARCH 28, 2019"
    timesone.textContent = "Lambda Times"
    spantemp.textContent = "98°"
    divone.appendChild(spanone);
    divone.appendChild(timesone);
    divone.appendChild(spantemp);

    return divone;
}
headers = document.querySelector(".header-container")

headers.appendChild(Header(divone));
