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

let entrypoint = document.querySelector('.header-container')
entrypoint.appendChild(header())


function header(data) {

    const header1 = document.createElement('div');
    const date = document.createElement('span');
    const titleh1 = document.createElement('h1');
    const tempature = document.createElement('span');

// Structure of Elements

    header1.appendChild(date)
    date.textContent = 'SMARCH 28, 2019';

    header1.appendChild(titleh1)
    titleh1.textContent = 'Lambda Times';

    header1.appendChild(tempature)
    tempature.textContent = '98°';


// set Class Names

    header1.classList.add('header')
    date.classList.add('date')
    tempature.classList.add('temp')




    return header1
}
