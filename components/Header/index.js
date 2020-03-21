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
    //create my elements
    const topHeader = document.createElement('div');
    const date = document.createElement('span');
    const h1 = document.createElement('h1');
    const temp = document.createElement('span');
    //append my elements
    topHeader.append(date, h1, temp);

    //add class to my elements
    topHeader.classList.add('header');
    date.classList.add('date');
    temp.classList.add('temp');
    //give text content to my elements
    date.textContent = 'MARCH 28, 2019';
    h1.textContent = 'Lambda Times';
    temp.textContent = '98';

    return topHeader;
}

//grab component that we are appending this to and give name
const headerContainer = document.querySelector('.header-container')
const newHeader = Header()
headerContainer.append(newHeader);
//create forEach function to append to DOM