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

function Header() {
    let div = document.createElement('div');
    let span = document.createElement('span');
    let h1 = document.createElement('h1');
    let tempSpan = document.createElement('h1');


// Attributes
div.classList.add('header');
span.classList.add('date');
tempspan.classList.add('temp');

// Text
span.textContent = 'SMarch 28, 2019';
h1.textContent = 'Lambda Times';
tempSpan.textContent = '98°';



div.appendChild(span);
div.appendChild(h1);
div.appendChild(tempSpan);

document.querySelector('.header-container').appendChild(div);

}

Header();
