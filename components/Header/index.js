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

    //  add elements 
    const 
    header1 = document.createElement('div'),
    newDate= document.createElement('span'),
    newTitle = document.createElement('h1'),
    newTemp = document.createElement('span')

    // add existing classes
   
    
    header1.classList.add('header')
    newDate.classList.add('date')
    newTemp.classList.add('temp')

    // append boxes



    header1.appendChild(newDate)
    header1.appendChild(newTitle)

    // add content
    
    newTitle.textContent='Lambda Times'
    newDate.textContent = 'SMARCH 28, 2019'
    newTemp.textContent='98°'

    //returning the big main div holding all other elements 

    return header1

}

// append new created div 'Header'into the main 'header container'.


const headerContainer = document.querySelector('.header-container')
headerContainer.appendChild(Header())

























