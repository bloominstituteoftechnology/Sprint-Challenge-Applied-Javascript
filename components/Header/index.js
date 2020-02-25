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




function head(){



const header = document.createElement('div');
const headerDate = document.createElement('span');
const headerTitle = document.createElement('h1');
const temp = document.createElement('span');


header.appendChild(headerDate);
header.appendChild(headerTitle);
header.appendChild(temp);


header.classList.add('header');
headerDate.classList.add('date');
temp.classList.add('temp');


headerDate.textContent = 'MARCH 28, 2019';
headerTitle.textContent = 'Lambda Times';
temp.textContent = '98°';

return header;
}

const newHead = head();

const headCont = document.querySelector('.header-container');

headCont.appendChild(newHead);

