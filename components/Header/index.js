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
   
    const div =document.createElement("div");
    div.classList.add(".header");
  
    const spanOne =document.createElement("span");
    spanOne.classList.add("date");
    spanOne.textContent ="SMARCH 28. 2019";
  
    const  homeOne =document.createElement("h1")
    homeOne.textContent ="Lambda Times";
  
    const spanTwo =document.createElement("span");
    spanTwo.classList.add("temp");
    spanTwo.textContent = "98°";
    // spanTwo.style.left='3%';
  
    ElementArray = [spanOne, homeOne, spanTwo];
  
  div.appendChild(spanOne);
  div.appendChild(homeOne);
  div.appendChild(spanTwo)
  
  ElementArray.forEach(el => div.appendChild(el));
  
 return div;
 };
 const headerEnty = document.querySelector(".header-container").appendChild(Header());