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
  // Create element
  const headerDiv = document.createElement("div"),
    spanDate = document.createElement("span"),
    h1E = document.createElement("h1"),
    spanTemp = document.createElement("span");
  //append element
  headerDiv.append(spanDate);
  headerDiv.append(h1E);
  headerDiv.append(spanTemp);
  //class list
  headerDiv.classList.add("header");
  spanDate.classList.add("date");
  spanTemp.classList.add("temp");
  //add content
  spanDate.textContent = "SMARCH 28, 2019";
  h1E.textContent = "Lambda Times";
  spanTemp.textContent = "98°";

  return headerDiv;
}
// target
const theHeader = document.querySelector(".header-container");
theHeader.append(Header());
