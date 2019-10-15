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
const topDiv = document.createElement('div');
const dateText = document.createElement('span');
const paperTitle = document.createElement('h1');
const tempText = document.createElement('span');
    
topDiv.classList.add('header');
dateText.classList.add('date');
tempText.classList.add('temp');
    
dateText.textContent = "MARCH 28, 2019";
paperTitle.textContent = "Lambda Times";
tempText.textContent = "98°";
    
topDiv.appendChild(dateText);
topDiv.appendChild(paperTitle);
topDiv.appendChild(tempText);
    
return topDiv;
}
    
const header = document.querySelector('.header-container');
header.appendChild(Header());