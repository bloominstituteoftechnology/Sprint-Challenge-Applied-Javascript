// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

function Header( text, text2, text3) {
    let div = document.createElement('div');
    let span = document.createElement('span');
    let h1 = document.createElement('h1');
    let span2 = document.createElement('span');

    div.classList.add('header');
    span.classList.add('date');
    span2.classList.add('temp');

    span.textContent = text;
    h1.textContent = text2;
    span2.textContent = text3;

    div.appendChild(span);
    div.appendChild(h1);
    div.appendChild(span2)

    return div;

}

let header = document.querySelector(".header-container");
header.append(Header('MARCH 28, 2019', "Lambda Times", "98°"));
