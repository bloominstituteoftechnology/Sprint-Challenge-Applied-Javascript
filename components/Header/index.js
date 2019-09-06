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

const head = document.querySelector('.header-container');

function makeHeader() {
    const newHeader = document.createElement('div');
    newHeader.classList.add('header');
    document.querySelector('.header-container').appendChild(newHeader)
    
    const newDate = document.createElement('span');
    newDate.classList.add('date');
    newDate.textContent = 'SMARCH 28, 2019';
    newHeader.appendChild(newDate);
    
    const newHeadline = document.createElement('h1');
    newHeadline.textContent = 'Lambda Times';
    newHeader.appendChild(newHeadline);

    const newTemp = document.createElement('span');
    newTemp.classList.add('temp');
    newTemp.textContent = '98°';
    newHeader.appendChild(newTemp);

    // //add Class
    // headline.classList.add('headline');

    // //add Content
    // date.textContent = 'SMARCH 28, 2019';
    // headline.textContent = 'Lambda Times';
    // temp.textContent = '98 Degrees';

    // //add appends
    // header.appendChild(Header(newHeader));
    // header.appendChild(date);
    // header.appendChild(headline);
    // header.appendChild(temp);

    return newHeader;
};

makeHeader();
