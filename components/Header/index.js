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
// Create HTML Elements
const headerDiv = document.createElement('div');
const dateFrame = document.createElement('span');
const titleFrame = document.createElement('h1');
const temperatureFrame = document.createElement('span');

 // Set HTML Structure
 headerDiv.append(dateFrame);
 headerDiv.append(titleFrame);
 headerDiv.append(temperatureFrame);

 // Add Classes
 headerDiv.classList.add('header');
 dateFrame.classList.add('date');
 temperatureFrame.classList.add('temp');

 // Add Content
dateFrame.textContent = 'JANUARY 17 2022';
titleFrame.textContent = 'Lambda Times';
temperatureFrame.textContent = '98°';

 // return main div.
 return headerDiv;
 
}
 // Inject it into HTML file.

 const connection = document.querySelector('.header-container');
 connection.append(Header());

