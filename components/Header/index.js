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
  // Creating elements
  const headerDiv = document.createElement('div');
  const spanDate = document.createElement('span');
  const h1 = document.createElement('h1');
  let spanTemp = document.createElement('span');

  // Adding class
  headerDiv.classList.add('header');
  spanDate.classList.add('date');
  spanTemp.classList.add('temp');

  //Combining elements
  headerDiv.append(spanDate, h1, spanTemp);

  // Adding text
  spanDate.textContent = 'SMARCH 28, 2019';
  h1.textContent = 'Lambda Times';
  spanTemp.textContent = '98°';

  // console.log(headerDiv);
  return headerDiv;
}

const headerContainer = document.querySelector('.header-container');
headerContainer.append(Header());