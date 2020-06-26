// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header(date,title,temp) {
    let header0 = document.createElement('div');
    let headerDate =  document.createElement('span');
    let headerTitle = document.createElement('h1');
    let headerTemp = document.createElement('span');
    
     header0.classList.add('header');
     headerDate.classList.add('date');
     headerTemp.classList.add('temp');


     headerDate.textContent = date;
     headerTitle.textContent =  title;
     headerTemp.textContent = temp;

     header0.appendChild(headerDate);
     header0.appendChild(headerTitle);
     header0.appendChild(headerTemp);

     return header0;
};
let headerContainer = document.querySelector('.header-container');

headerContainer.appendChild(Header("MARCH 28, 2019","Lambda Times","98°"));
