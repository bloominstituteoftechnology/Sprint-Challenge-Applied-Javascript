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
    const 
    header1 = document.createElement('div'),
    newDate= document.createElement('span'),
    newTitle = document.createElement('h1'),
    newTemp = document.createElement('span')
   
    
    header1.classList.add('header')
    newDate.classList.add('date')
    newTemp.classList.add('temp')



    header1.appendChild(newDate)
    header1.appendChild(newTitle)

    
    newTitle.textContent='Lambda Times'
    newDate.textContent = 'SMARCH 28, 2019'
    newTemp.textContent='98°'

    return header1

}

const headerContainer = document.querySelector('.header-container')
headerContainer.appendChild(Header())

























