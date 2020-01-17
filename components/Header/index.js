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

function banner() {
    const header = document.createElement('div');
    const date = document.createElement('span');
    const title = document.createElement('h1');
    const temp = document.createElement('span');

    header.append(date);
    header.append(title);
    header.append(temp);

    header.classList.add('date');
    header.classList.add('title');
    header.classList.add('span');

    date.textContent = "March 28, 2019";
    title.textContent = "Lambda Times";
    temp.textContent = "98°";

    return header;
}

const topBanner = document.querySelector(".header-container");
topBanner.append(banner())


