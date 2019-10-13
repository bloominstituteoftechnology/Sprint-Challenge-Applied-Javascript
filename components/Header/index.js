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
    const title = document.createElement('div');
    title.className = 'class';
    
    const date = document.createElement('span');
    date.className = 'date';
    date.textContent = 'SMARCH 28, 2019'
    title.appendChild(date);
    
    const head = document.createElement('h1');
    head.textContent = 'Lambda Times'
    title.appendChild(head);

    const temp = document.createElement('span');
    temp.className = 'temp' ;
    temp.textContent = '98° ';
    title.appendChild(temp);

    return title;

}


let headerContainer = document.querySelector(".header-container");
headerContainer.appendChild(Header());