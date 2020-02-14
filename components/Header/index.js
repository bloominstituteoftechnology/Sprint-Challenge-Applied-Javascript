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
    //create elements
    const headerDiv = document.createElement('div');
    const headerDate = document.createElement('span');
    const headerH1 = document.createElement('span');
    const headerTemp = document.createElement('span');

    //assign classes
    headerDiv.classList.add('header');
    headerDate.classList.add('date');
    headerTemp.classList.add('temp');

    //set the content
    headerDate.textContent = "5 MARCH 28,2019";
    headerH1.textContent = "Lambda Times";
    headerTemp.textContent = "98&#778";

    //append the elements
    headerDiv.appendChild(headerDate, headerH1, headerTemp);

    //return the component
    return headerDiv;
}//end Header()

//get entry point
const entryPoint = document.querySelector('.header-container');

//append elements to header-container
entryPoint.appendChild(headerDiv);