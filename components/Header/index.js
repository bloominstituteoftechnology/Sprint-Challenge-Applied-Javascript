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

// const headerContainer = document.querySelector('.header-container');
// headerContainer.appendChild(Header());

// function Header() {

//     //define new elements
//     const headerDiv = document.createElement('div');
//     const dateSpan = document.createElement('span');
//     const title = document.createElement('h1');
//     const tempSpan = document.createElement('span');

//     //add classes to elements
//     article.classList.add('header');    
//     dateSpan.classList.add('date');    
//     tempSpan.classList.add('temp');

//     //set text content
//     title.textContent = "Lambda Times"; 

//     //setup the structure of elements
//     headerDiv.appendChild(dateSpan);
//     headerDiv.appendChild(title);
//     headerDiv.appendChild(tempSpan);

//     return headerDiv;
// }



const header = document.querySelector(".header-container");
header.appendChild(newHeader());
function newHeader() {
    // create elements
    const header = document.createElement('div');
    const date = document.createElement('span');
    const title = document.createElement('h1');
    const temp = document.createElement('span');
    // add classes to elements
    header.classList.add('header');
    date.classList.add('date');
    temp.classList.add('temp');
    //set up shape of object
    header.appendChild(date);
    header.appendChild(title);
    header.appendChild(temp);
    // add content
    date.textContent = 'SMARCH 28, 2019';
    title.textContent = 'Lambda Times';
    temp.textContent = '98°';
    return header;
}
