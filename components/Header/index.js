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
    const headerDiv = document.createElement('div');
    article.classList.add('header');

    const dateSpan = document.createElement('span');
    dateSpan.classList.add('date');

    const title = document.createElement('h1');
    title.textContent = "Lambda Times";
   
    const tempSpan = document.createElement('span');
    tempSpan.classList.add('temp');

    headerDiv.appendChild(dateSpan);
    headerDiv.appendChild(title);
    headerDiv.appendChild(tempSpan);

    return headerDiv;
}