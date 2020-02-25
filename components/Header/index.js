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
  const myHead = document.createElement('div');
  myHead.classList.add('header');

  const dateSpan = document.createElement('span');
  dateSpan.classList.add('date');
  dateSpan.textContent = 'MARCH 28, 2019';

  const myH1 = document.createElement('h1');
  myH1.textContent = 'Lambda Times';

  const tempSpan = document.createElement('span');
  tempSpan.classList.add('temp');
  tempSpan.innerHTML = '98 <span>&deg;</span>';

  myHead.appendChild(dateSpan);
  myHead.appendChild(myH1);
  myHead.appendChild(tempSpan);

  return myHead
}

const headCont = document.querySelector('.header-container');
headCont.appendChild(Header());
