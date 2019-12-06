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

// content in the function 
const header = document.createElement('div');
const theDate = document.createElement('span')
const title = document.createElement('h1');
const temp = document.createElement('span');

//  create the class

header.classList.add('header');
theDate.classList.add('date');
temp.classList.add('temp');

// location of the empty elements 
header.appendChild(theDate);
header.appendChild(title);
header.appendChild(temp);

// specify content
theDate.textContent = 'SMARCH 28, 2019';
title.textContent = 'Lambda Times';
temp.textContent = '98°';

// return the div 
return header;

}

document.querySelector('.header-container').appendChild(Header())
