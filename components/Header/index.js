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
    let div = document.createElement("div");
    div.classList.add("header");
    
    let span = document.createElement("span");
    span.classList.add("date");
    span.innerHTML = "May 16, 2020";
    div.appendChild(span);
    
    let h1 = document.createElement("h1");
    h1.innerHTML = "Lambda Times";
    div.appendChild(h1);
    
    let span1 = document.createElement("span");
    span1.classList.add("temp");
    span1.innerHTML = "82°";
    div.appendChild(span1);
    
    return div;
    
    }

document.querySelector(".header-container").appendChild(Header());