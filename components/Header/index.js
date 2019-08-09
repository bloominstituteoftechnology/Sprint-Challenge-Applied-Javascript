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

function Header(data) {

    const header = document.createElement('div');
    const date = document.createElement('span');
    const titleh1 = document.createElement('h1');
    const tempature = document.createElement('span');

// Structure of Elements

    header.appendChild(date)
    date.textContent = data.date

    header.appendChild(titleh1)
    titleh1.textContent = data.titleh1

    header.appendChild(tempature)
    tempature.textContent = data.temp


// set Class Names

    header.classList.add('header')
    date.classList.add('date')
    tempature.classList.add('temp')


    let entrypoint = document.querySelector('.header-container')
    entrypoint.appendChild(header)



    return header
}
