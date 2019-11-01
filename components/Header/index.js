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

const headerPortion = document.querySelector('.header-container');

function Header() {
    // CREATE ELEMENTS
    const
        headerParent = document.createElement('div'),
        headerDate = document.createElement('span'),
        headerTitle = document.createElement('h1'),
        headerTemp = document.createElement('span');

    // ADD CLASSES
    headerParent.classList.add('header');
    headerDate.classList.add('date');
    headerTemp.classList.add('temp');

    // ADD CONTENT
    headerDate.textContent = `SMARCH 28, 2019`;
    headerTitle.textContent = `Lambda Times`;
    headerTemp.textContent = `98°`

    // APPEND
    headerParent.appendChild(headerDate);
    headerParent.appendChild(headerTitle);
    headerParent.appendChild(headerTemp);

    // RETURN
    return headerParent;
}

// CALL FUNCTION
headerPortion.appendChild(Header());