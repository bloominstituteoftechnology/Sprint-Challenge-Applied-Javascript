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

const container = document.querySelector('.header-container');

function Header(spanText, title, temp) {
    const main = document.createElement('div');
    main.classList.add("header");

    const span = document.createElement('span');
    span.classList.add('date');
    span.textContent = spanText;
    main.appendChild(span);

    const h1 = document.createElement('h1');
    h1.textContent = title;
    main.appendChild(h1);

    const secondSpan = document.createElement('span');
    secondSpan.classList.add('temp');
    secondSpan.textContent = temp;
    main.appendChild(secondSpan);

    return main;
}

container.appendChild(Header('MARCH 28, 2019', 'Lambda Times', "98"));