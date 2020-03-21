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
    //Outer Container
    let headerContainer = document.querySelector('.header-container');


    //Inner Container
let internalHeader = document.createElement('div');
    internalHeader.classList.add('header')


    //Date Span
let dateSpan = document.createElement('span');
    dateSpan.classList.add("date");
    dateSpan.textContent = 'MARCH 28, 2019'

    //Main Header
let headerTitle = document.createElement('h1');
    headerTitle.textContent = 'Lambda Times';


    //Temperaure Span
let tempSpan = document.createElement('span');
    tempSpan.classList.add('temp')

function Header(){
    internalHeader.appendChild(tempSpan);
    internalHeader.appendChild(dateSpan);
    internalHeader.appendChild(headerTitle);

    headerContainer.appendChild(internalHeader);

    return Header
}

Header();
