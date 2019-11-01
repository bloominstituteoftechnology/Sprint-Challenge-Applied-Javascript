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
  // element
  const headDiv = document.createElement("div");
  const headSpan = document.createElement("span");
  const hH1 = document.createElement("h1");
  const headSpan2 = document.createElement("span");
  // append
  const hContainer = document.querySelector(".header-container");
  hContainer.appendChild(Header());

  headDiv.appendChild(headSpan);
  headDiv.appendChild(hH1);
  headDiv.appendChild(headSpan2);

  headDiv.classList.add("header");
  headSpan.classList.add("date");
  headSpan2.classList.add("temp");

  headSpan.textContent = "SMARCH 28,2019";
  hH1.textContent = "Lambda Times";
  headSpan2.textContent = "98°";

  return headDiv;
}
