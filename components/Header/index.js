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

//ready to start project, first commit to start PR according to Sprint Instructions.

function Header() {
    //creating elements
    let header = document.createElement('div'),
        date = document.createElement('span'),
        time = document.createElement('h1'),
        temp = document.createElement('span');

    //adding class(s) where needed
    header.classList.add('header');
    date.classList.add('date');
    temp.classList.add('temp');

    //Structuring of elements
    header.append(date);
    header.append(time);
    header.append(temp);

    //adding content to files
    date.textContent = "March 28, 2019";
    time.textContent = "Lambda Times";
    temp.textContent = "98°"

return header;
}
let headerContainer = document.querySelector('.header-container');
headerContainer.append(Header())