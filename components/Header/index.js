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

var data = {
    date:'SMarch 28, 2019',
    title: 'Lambda Times',
    temp: '98°'
}

const headerContainer = document.querySelector('header-container');



function Header(date, h1, temp) {
    //defining
    const header = document.createElement('div');
    const headerDate = document.createElement('span');
    const headerTitle = document.createElement('h1');
    const temperature = document.createElement('span');
    
    //elements 
    header.appendChild(headerDate);
    header.appendChild(headerTitle);
    header.appendChild(temperature);

    //class names
    header.classList.add('header');
    headerDate.classList.add('date');
    temperature.classList.add('temp');

    //text content
    headerDate.textContent = date;
    headerTitle.textContent = title;
    temperature.textContent = temp;

    console.log('hello');
    return header
}
console.log(header(date, header, temp));