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
  let headerDiv = document.createElement("div");
  let headerDate = document.createElement("span");
  let headerTitle = document.createElement("h1");
  let headerTemp = document.createElement("span");
  headerDiv.classList.add("header");
  headerDate.classList.add("date");
  headerTemp.classList.add("temp");
  headerDate.innerHTML = "MARCH 28, 2019";
  headerTitle.innerHTML = "Lambda Times";
  headerTemp.innerHTML = "98°";

  headerDiv.append(headerDate);
  headerDiv.append(headerTitle);
  headerDiv.append(headerTemp);
  return headerDiv;
}

document.querySelector(".header-container").append(Header());
