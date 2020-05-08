// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {

            //start of consts\\
    const header = document.createElement('div')
    const headerDate = document.createElement('span')
    const headerTitle = document.createElement('h1')
    const headerTemp = document.createElement('span')

            //start of appendChild\\
    header.appendChild(headerDate)
    header.appendChild(headerTitle)
    header.appendChild(headerTemp)

            //start of classList\\
    header.classList.add('header')
    headerDate.classList.add('date')
    headerTemp.classList.add('temp')

            //start of textContent\\
    headerDate.textContent = 'MARCH 28, 2019'
    headerTitle.textContent = 'Lambda Times'
    headerTemp.textContent = '98°'
    
            //querySelector for appendChild\\
    document.querySelector('.header-container').appendChild(header)
}

                //invoking the Header function\\
                           Header()