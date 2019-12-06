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

  // Creating Elements:

  const headerDiv = document.createElement('div'),
  headerDate = document.createElement('span'),
  headerTitle = document.createElement('h1'),
  headerTemp = document.createElement('span');

  // Adding Classes:

  headerDiv.classList.add('header');
  headerDate.classList.add('date');
  headerTemp.classList.add('temp');

  // Adding Text Content:

  headerDate.textContent = 'SMARCH 28, 2019';
  headerTitle.textContent = 'Lambda Times';
  headerTemp.textContent = '98°';

  // Appending Children:

  headerDiv.append(headerDate);
  headerDiv.append(headerTitle);
  headerDiv.append(headerTemp);

  // Returning Parent:

  return headerDiv;

}

// Creating header-container variable and attaching:

const headerContainer = document.querySelector('.header-container');

headerContainer.append(Header())
