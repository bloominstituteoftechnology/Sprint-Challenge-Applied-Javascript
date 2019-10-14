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
    let divH = document.createElement('div');
    let spanDH = document.createElement('span');
    let h1H = document.createElement('h1');
    let spanTH = document.createElement('span');

    divH.classList.add('header');
    spanDH.classList.add('date');
    spanTH.classList.add('temp');

    spanDH.textContent = "SMARCH 28, 2019";
    h1H.textContent = "Lambda Times";
    spanTH.textContent = "98°"

    divH.appendChild(spanDH);
    divH.appendChild(h1H);
    divH.appendChild(spanTH);
    
    return divH;
}

let headerContainer = document.querySelector('.header-container');
console.log(headerContainer);
headerContainer.appendChild(Header());