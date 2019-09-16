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

function Header(headerInfo) {

    const div = document.createElement('div');
    const span = document.createElement('span');
    const span2= document.createElement('span');
    const h1 = document.createElement('h1');

    div.appendChild(span);
    div.appendChild(h1);
    div.appendChild(span2);

    div.classList.add('header');
    span.classList.add('date');
    span2.classList.add('temp');
    h1.textContent = headerInfo.title;
    span.textContent = headerInfo.date;
    span2.textContent = headerInfo.temp + '°';
    return div;
}
document.querySelector('.header-container').appendChild(Header({ 
    title: 'Lambda Times',
    date: 'SMARCH 28, 2019',
    temp: '98'
}));