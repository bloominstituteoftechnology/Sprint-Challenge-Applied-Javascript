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

function Header() {}
let container = document.querySelector('.header-container');

const header = document.createElement('div');
container.appendChild(header);
header.classList.add('header');


header.appendChild(date);
date.classList.add('date');
date.textContent = 'March 28, 2019';

const title = document.createElement('h1');
title.classList.add('h1')
title.textContent = 'Lambda Times';
header.appendChild(title);

const temp = document.createElement('span');
temp.classList.add('temp')

Header();
