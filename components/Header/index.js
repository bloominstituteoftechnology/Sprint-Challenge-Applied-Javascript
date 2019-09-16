// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>  <---typo?
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
  // create elements
  const header = document.createElement('div');
  const date = document.createElement('span');
  const title = document.createElement('h1');
  const temp = document.createElement('span');

  // add classes
  header.classList.add('header');
  date.classList.add('date');
  temp.classList.add('temp');

  // add content: 
  date.textContent = `MARCH 28, 2019`;
  title.textContent = `Lambda Times`;
  temp.textContent = `98˚`;

  // append elements
  header.appendChild(date);
  header.appendChild(title);
  header.appendChild(temp);

  return header;
}
// console.log(Header());

headerContainer = document.querySelector('.header-container');
headerContainer.appendChild(Header())

