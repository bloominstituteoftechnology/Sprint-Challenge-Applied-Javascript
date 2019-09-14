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
    var x = document.createElement("header");
  x.setAttribute("class", "myHeader");
  document.body.appendChild(x);
  var y = document.createElement("h1"); 
  y.appendChild(t);
  document.getElementById("myHeader").appendChild(y);
}
