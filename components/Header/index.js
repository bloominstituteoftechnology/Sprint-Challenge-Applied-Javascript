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

  //Define the variables
  const header = document.createElement('div');
  const date   = document.createElement('span');
  const title  = document.createElement('h1');
  const temp   = document.createElement('span');

  //Add it to the DOM in the .header-container component
  const headerContainer = document.querySelector('.header-container');

  //Create the elements

  headerContainer.appendChild(header);
  header.appendChild(date);
  header.appendChild(title);
  header.appendChild(temp);

  //Define styles
  //Two ways to do this
  //header.setAttribute('class','header');
  // date.setAttribute('class','date');
  // title.setAttribute('class','h1');
  // temp.setAttribute('class','temp');
  header.classList.add('header');
  date.classList.add('date');
  title.classList.add('h1');
  temp.classList.add('temp');



  //Add Content
  date.textContent = 'March 28, 2019';
  title.textContent = 'Lambda Times';
  temp.textContent = '98°'
}

Header();
