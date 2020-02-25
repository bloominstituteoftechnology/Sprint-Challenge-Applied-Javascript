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
    const headerDate = document.createElement('span');
    const headerTitle = document.createElement('h1');
    const headerTemp = document.createElement('span');

    //class list to element
    headerDate.classList.add('date');
    headerTemp.classList.add('temp');
    header.classList.add('header');

    //add text to html element??????? (i hope so)
headerDate.textContent = `Oct 13, 2019`;
headerTitle.textContent = `Lambda Times`;
headerTemp.textContent = `32&deg`;


//append child to parent (whatever that means)
header.appendChild(headerDate);
header.appendChild(headerTitle);
header.appendChild(headerTemp);



    return header;
}
    mainHeader.appendChild(createHeader());