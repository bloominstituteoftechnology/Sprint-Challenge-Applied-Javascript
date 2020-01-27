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

// console.log(mainHeaderContainer);

function Header() {
  const headerContainer = document.createElement('div');
  headerContainer.classList.add('header');

  const headerDate = document.createElement('span');
  headerDate.classList.add('date');
  headerContainer.appendChild(headerDate);
  headerDate.textContent = 'SMARCH 28, 2019';

  const headerTime = document.createElement('h1');
  headerTime.textContent = 'Lambda Times';
  headerContainer.appendChild(headerTime);

  const headerTemp = document.createElement('span');
  headerTemp.classList.add('temp');
  headerTemp.textContent = '98°';
  headerContainer.appendChild(headerTemp);

  return headerContainer;
}
const mainHeaderContainer = document.querySelector('.header-container');
mainHeaderContainer.appendChild(Header());
