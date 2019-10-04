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
  const header = document.createElement('div');
  const date = document.createElement('span');
  const h1 = document.createElement('h1');
  const temp = document.createElement('span');
  const today = new Date();

  date.textContent = today;
  h1.textContent = 'Lamda Times';
  temp.textContent = '98°';

  header.classList.add('header');
  date.classList.add('date');
  temp.classList.add('temp');

  header.appendChild(date);
  header.appendChild(h1);
  header.appendChild(temp);

  return header;
}

const headerContainer = document.querySelector('.header-container');
headerContainer.appendChild(Header());