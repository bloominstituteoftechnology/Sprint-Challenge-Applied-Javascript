// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

function Header() {
    
    // Get the Header Container Element
    let headerContainer = document.getElementsByClassName("header-container")[0];
    // create a new DIV
    let newDiv = document.createElement('div');
    newDiv.classList.add('header'); 
    // Create a new SPAN
    let newSpan0 = document.createElement('span');
    newSpan0.classList.add('date');
    newSpan0.innerText = 'MARCH 28, 2019'; 
    // Create a new H1
    let newH1 = document.createElement('h1');
    newH1.innerText = 'Lambda Times';
    // Create a new SPAN
    let newSpan1 = document.createElement('span');
    newSpan1.classList.add('temp'); 
    newSpan1.innerText = '98°';
    // Append all child elements to the new DIV
    newDiv.appendChild(newSpan0);
    newDiv.appendChild(newH1);
    newDiv.appendChild(newSpan1);
    // Append the new DIV to the Header
    headerContainer.appendChild(newDiv);
       
}

// Execute Header to create the header
Header();
