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
    headerText.classList.add('header');

    const date = document.createElement('span');
    date.textContent = 'Feb 21, 2020';
    headerText.appendChild(date);

    const title = document.createElement('h1');
    title.textContent= 'Lambda Times';
    headerText.appendChild(title);

    const temp = document.createElement('span');
    temp.classList.add('temp');
    temp.textContent = '48°' 
    headerText.appendChild(temp);

return headerText;
}
const header1 = Header();
const headerContainer = document.querySelector('.header-container');


headerContainer.appendChild(header1);
