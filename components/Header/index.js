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


const tops = document.querySelector(".header-container");

function Header(){
let header = document.createElement("div");
let data = document.createElement("span");
let title = document.createElement("h1");
let temp = document.createElement("span");

header.classList.add("header");
data.classList.add("date");
temp.classList.add("temp");

data.textContent = "SMARCH 28, 2019";
title.textContent = "Lambda Time";
temp.textContent = "98";

header.appendChild(data);
header.appendChild(title);
header.appendChild(temp);

return tops.appendChild(header);
}
Header();