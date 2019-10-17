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

function Header({
    const header_content = 
<div class="header">
  <span class="date">SMARCH 28, 2019</span>
  <h1>Lambda Times</h1>
  <span class="temp">98&#176;</span>
</div>;
const header_area = document.querySelector(".header-container");
header_area.innerHTML = header_content;
});
