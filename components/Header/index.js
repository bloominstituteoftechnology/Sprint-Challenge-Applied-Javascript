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
    let header = document.createElement("div");
    let span1 = document.createElement("span");
    let h1 = document.createElement("h1");
    h1.textContent = 'Lambda Times'
    let span2 = document.createElement("span");
  
    header.classList.add("header");
    span1.classList.add("date");
    span2.classList.add("temp");
  
    span1.textContent = "SMARCH 28, 2019";
    //Unicode UTF-8 chart: https://www.utf8-chartable.de/
    span2.textContent = "98\u00B0";
  
    header.appendChild(span1);
    header.appendChild(h1);
    header.appendChild(span2);
  
    return header;
  }
  
  let main = document.querySelector(".header-container");
  main.appendChild(Header());
