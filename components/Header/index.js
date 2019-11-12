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

    const topHead = document.createElement('div');
    const date1 = document.createElement('span');
    const title1 = document.createElement('h1');
    const temp1 = document.createElement('span');


    topHead.appendChild(date1);
    topHead.appendChild(title1);
    topHead.appendChild(temp1);

    topHead.classList.add('header')
    date1.classList.add('date')
    temp1.classList.add('temp')

    date1.textContent = 'SMARCH 28, 2019';
    title1.textContent = 'Lambda Times';
    temp1.textContent = '98°';
  
    
    return topHead;
}

document.querySelector('.header-container').appendChild(Header())
