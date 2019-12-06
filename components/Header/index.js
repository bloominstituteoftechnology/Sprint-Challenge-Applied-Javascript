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


function Header(){
    // element
    const headerSec = document.createElement('div');
    const date = document.createElement('span');
    const headerTitle = document.createElement('h1');
    const temp = document.createElement('span');
  
    // class
    headerSec.classList.add('header');
    date.classList.add('date');
    temp.classList.add('temp');
  
    // append
    headerSec.appendChild(date);
    headerSec.appendChild(headerTitle);
    headerSec.appendChild(temp);
    
    // content
    date.textContent = "SMARCH 28, 2019";
    headerTitle.textContent = "Lambda Times";
    temp.textContent = "98°";
  
    return headerSec;
  }
  
  const startingPointHeader = document.querySelector('.header-container');
  startingPointHeader.prepend(Header());


//   const newListItem = document.createElement('a');
// newListItem.textContent = "Other"
// const parentElement = document.querySelector('nav');
// parentElement.append(newListItem) 