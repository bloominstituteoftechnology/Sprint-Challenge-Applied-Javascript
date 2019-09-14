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
      
    // create all elements
    const header = document.createElement('div');
    const headerDate =document.createElement('span');
    const headerH1 =document.createElement('h1');
    const headerTem =document.createElement('span');

    // create structure
    header.appendChild(headerDate);
    header.appendChild(headerH1);
    header.appendChild(headerTem);

      // apply styles
    header.classList.add('header');
    headerDate.classList.add('date');
    headerTem.classList.add('temp');

    // set the content
    headerDate.textContent='MARCH 28, 2019';
    headerH1.textContent='Lambda Times';
    headerTem.textContent='98°';


    return header;
}
 const selectHeader = document.querySelector('.header-container');
 selectHeader.appendChild(Header());

