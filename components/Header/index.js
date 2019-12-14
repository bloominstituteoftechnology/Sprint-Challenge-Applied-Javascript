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
    const divHeader = document.createElement('div'),
    spandate = document.createElement('span'),
    title = document.createElement('h1'),
    spantemp = document.createElement('span');

/*...................appending Chidren..............................*/
    divHeader.appendChild(spandate);
    divHeader.appendChild(title);
    divHeader.appendChild(spantemp);

/*.......................adding class.........................*/
    divHeader.classList.add('header');
    spandate.classList.add('date');
    spantemp.classList.add('temp');

/*....................add title...................*/
    title.textContent = 'Lambda Times';


    return divHeader;

    
    

}

const domHeader = document.querySelector('.header-container').appendChild(Header());

console.log(Header());