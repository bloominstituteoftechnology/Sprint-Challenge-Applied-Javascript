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




function Header(items) {
    const header = document.createElement('div');
    const date = document.createElement('span');
    const title = document.createElement('h1');
    const temp = document.createElement('span');

    header.classList.add("header");
    date.classList.add("span", "date");
    title.classList.add("h1");
    temp.classList.add("span", "temp");
  
    date.textContent = "SMARCH 28 2019";
    title.textContent = "Lambda Times";
    temp.textContent = "98";
  
    header.appendChild(date);
    header.appendChild(title);
    header.appendChild(temp);

    return header;
}

const headerContainer = document.querySelector(".header-container");
const header = Header();
headerContainer.appendChild(header);
