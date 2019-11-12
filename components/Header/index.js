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

function Header(info) {
    const header = document.createElement('div');
    const headerDate = document.createElement('span');
    const headerHeading1 = document.createElement('h1');
    const headerTemperature = document.createElement('span');

    header.appendChild(headerDate)
    header.appendChild(headerHeading1)
    header.appendChild(headerTemperature)

    header.classList.add('.header')
    headerDate.classList.add('.date')
    headerTemperature.classList.add('.temp')  
    
    return header

}

