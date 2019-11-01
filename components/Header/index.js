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
const headers = document.querySelector('.header-container')


function header() {
    const header = document.createElement('div');
    const date = document.createElement('span');
    const head2 = document.createElement('h1');
    const temp = document.createElement('span')



    header.classList.add('header');
    date.classList.add('date');
    temp.classList.add('temp')



    header.appendChild(date);
    header.appendChild(head2);
    header.appendChild(temp)

    return header;

}

