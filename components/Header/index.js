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
    const headerDiv = document.createElement('div');
    const date = document.createElement('span');
    const h1 = document.createElement('h1');
    const temp = document.createElement('span');


    //append
    headerDiv.append(date);
    headerDiv.append(h1);
    headerDiv.append(temp);

    //classes
    headerDiv.classList.add('header');
    date.classList.add('date');
    temp.classList.add('temp');

    //text content
    date.textContent = 'SMARCH 28, 2019';
    h1.textContent = 'Lambda Times';
    temp.textContent = '98°';

    return headerDiv;
}

const newspaper = document.querySelector('.header-container');
newspaper.append(Header());