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

const headerContainer = document.querySelector('.header-container')

function header(date, temp){
    const headerDiv = document.createElement('div'),
          dates = document.createElement('span'),
          title = document.createElement('h1'),
          temperature = document.createElement('span');

    headerContainer.append(headerDiv)     
    headerDiv.append(dates)
    headerDiv.append(title)
    headerDiv.append(temperature)

    headerDiv.classList.add('header')
    dates.classList.add('date')
    temperature.classList.add('temp')

    dates.textContent = date
    title.textContent = 'Lambda Times'
    temperature.textContent = temp

    return headerDiv

}

header('SMARCH 28, 2019', '98°')