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
const head = document.querySelector('.header-container');

head.appendChild(Header());

function Header() {

      // date if we wanted the real date
      let currentDate = new Date(),
      day = currentDate.getDate(),
      month = currentDate.getMonth() + 1,
      year = currentDate.getFullYear();
      let today = `${day}/${month}/${year}`

      // header
      const headX = document.createElement('div');
      headX.classList.add('header');
  
      // date
      const dateX = document.createElement('span');
      dateX.classList.add('date');
      headX.appendChild(dateX);
      dateX.textContent = "SMARCH 28, 2019";
  
      // title
      const titleX = document.createElement('h1');
      headX.appendChild(titleX);
      titleX.textContent = 'Lambda Times'
  
      // temperature 
      const tempX = document.createElement('span');
      tempX.classList.add('temp');
      headX.appendChild(tempX);
      tempX.textContent = '98°';
  
      return headX;
}