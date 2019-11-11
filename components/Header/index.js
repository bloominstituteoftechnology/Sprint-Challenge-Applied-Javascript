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

function Header(datetext, titletext, temptext) {
    const headerdiv = document.createElement('div');
    headerdiv.classList.add('header');

    const datespan = document.createElement('span');
    datespan.classList.add('date');
    datespan.textContent = datetext;

    const title1 = document.createElement('h1');
    title1.textContent = titletext;

    const tempspan = document.createElement('span');
    tempspan.classList.add('temp');
    tempspan.textContent = temptext;

    headerdiv.appendChild(datespan)
    headerdiv.appendChild(title1)
    headerdiv.appendChild(tempspan)

    return headerdiv;
}

const container = document.querySelector('.header-container');

container.appendChild(Header('SMARCH 28, 2019', 'Lambda Times', '98°'))
