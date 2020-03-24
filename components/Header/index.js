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
    const theDate = document.createElement('span');
    const title = document.createElement('h1');
    const temp = document.createElement('span');

    header.classList.add('header');
    theDate.classList.add('date');
    temp.classList.add('temp');

    theDate.textContent = 'March 22, 2020';
    title.textContent = 'Lambda Times';
    temp.textContent = '98°';


    header.append(theDate);
    header.append(title);
    header.append(temp);

    return header;

}

const addToDom = document.querySelector('.header-container');

addToDom.append(Header());


