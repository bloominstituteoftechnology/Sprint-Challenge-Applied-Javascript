// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
  const headerDiv = document.createElement("div");
  const spanInDivDate = document.createElement("span");
  const headingOne = document.createElement("h1");
  const spanInDivTemp = document.createElement("span");

  headerDiv.setAttribute("class", "header");
  spanInDivDate.setAttribute("class", "date");
  spanInDivTemp.setAttribute("class", "temp");

  spanInDivDate.textContent = "Friday, June 5, 2020";
  headingOne.textContent = "Lambda Times";
  spanInDivTemp.textContent = "82°F";

  headerDiv.appendChild(spanInDivDate);
  headerDiv.appendChild(headingOne);
  headerDiv.appendChild(spanInDivTemp);

  const headerContainer = document.querySelector(".header-container")
  
  return headerContainer.append(headerDiv);
}
Header()

