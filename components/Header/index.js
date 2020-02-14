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
    //Creating Elements
    let header = document.createElement('div'),
        date = document.createElement('span'),
        name = document.createElement('h1'),
        temp = document.createElement('span');
    
    //Adding Classes
    header.classList.add('header');
    date.classList.add('date');
    temp.classList.add('temp');

    //Appending Elements
    header.append(date, name, temp)

    //textContent
    date.textContent = 'March 28, 2019';
    name.textContent = 'Lambda Times';
    temp.textContent = '98°';

    return header; //returning parent element of function
}

let headerContainer = document.querySelector('.header-container'); //Getting parent div from html using its className
headerContainer.append(Header())