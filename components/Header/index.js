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

    //create elements
    const div = document.createElement('div'),
        span = document.createElement('span'),
        title = document.createElement('h1'),
        span2 = document.createElement('span'),

        elementArray = [span, title, span2];

    //add classes
    div.classList.add('header');
    span.classList.add('date');
    span2.classList.add('temp');

    //add content
    span.textContent = 'SMARCH 28, 2019';
    title.textContent = 'Lambda Times';
    span2.textContent = '98°'

    //structure
    elementArray.forEach(element => div.appendChild(element));

    return div;
}

document.querySelector('.header-container').appendChild(Header());