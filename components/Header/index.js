// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function header(){
    let heaherMaker = document.createElement('div');
    heaherMaker.classList.add('header');

    let datemaker = document.createElement('span');
    datemaker.classList.add('date');
    datemaker.textContent = 'MARCH 28, 2019';
    heaherMaker.appendChild(datemaker);

    let lambdaTitle = document.createElement('h1');
    lambdaTitle.textContent = 'Lambda Times';
    heaherMaker.appendChild(lambdaTitle);
    
    let tempMaker = document.createElement('span');
    tempMaker.classList.add('temp');
    tempMaker.textContent = '98°';
    heaherMaker.appendChild(tempMaker);

    return heaherMaker;

};

let headerCon = document.getElementsByClassName('header-container');

headerCon[0].appendChild(header());
