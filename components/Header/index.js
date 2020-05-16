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

    //!ELEMENTS!\\
    
    const freshHeader = document.createElement("div");
    const freshDate = document.createElement("span");
    const freshTitle = document.createElement("h1");
    const freshTemp = document.createElement("span");
    
    //!CLASS!\\ 
    freshHeader.classList.add("header");
    freshDate.classList.add("date");
    freshTemp.classList.add("temp");
    
    //!STRUCTURES!//
    freshHeader.appendChild(freshDate);
    freshHeader.appendChild(freshTitle);
    freshHeader.appendChild(freshTemp);
    
    
    //!CONTENT!\\
    freshDate.textContent = "SMARCH 28, 2019"; 
    freshTitle.textContent = "Lambda Times";
    freshTemp.textContent = "98°";
    
    return freshHeader;
    
    }
    
    const headerContainer = document.querySelector(".header-container");
    headerContainer.appendChild(Header());