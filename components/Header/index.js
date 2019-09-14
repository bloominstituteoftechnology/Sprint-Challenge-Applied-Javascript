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

function header(date, title, temp) {

  //creating elements
  const lambdaHeader = document.createElement('div');
  const lambdaDate = document.createElement('span');
  const lambdaTitle = document.createElement('h1');
  const lambdaTemp = document.createElement('span')

  //creating classes
  lambdaHeader.classList.add('header');
  lambdaDate.classList.add('date');
  lambdaTemp.classList.add('temp');

  //adding content
  lambdaDate.textContent = date;
  lambdaTitle.textContent = title;
  lambdaTemp.textContent = temp;

  //add to parent
  lambdaHeader.appendChild(lambdaDate);
  lambdaHeader.appendChild(lambdaTitle);
  lambdaHeader.appendChild(lambdaTemp);

  //add event listeners

  return lambdaHeader;

}

const container = document.querySelector('.header-container')

header-container.appendChild(header(`SMARCH 28, 2019`, 'Lambda Times', '98*'))
