// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
    const headerD = document.createElement('div');
    const date = document.createElement('span');
    const headertext = document.createElement('h1');
    const temp = document.createElement('span');
     

    date.textContent = 'March 28, 2019';
    headertext.textContent = 'Lamda Times';
    temp.textContent = '98';

    headerD.classList.add('header');
    date.classList.add('date');
    headertext.classList.add('h1');
    temp.classList.add('temp');


    headerD.append(date);
    headerD.append(headertext);
    headerD.append(temp);

    return headerD

}

const headercomponent = document.querySelector('.header-container')
headercomponent.append(Header())

