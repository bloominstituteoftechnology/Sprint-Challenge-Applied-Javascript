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

function Header(info) {
    const newHeader = document.createElement('div'),
          eDate = document.createElement('span'),
          eH1 = document.createElement('h1'),
          eTemp = document.createElement('span');
        
    eDate.textContent = info.date;
    eH1.textContent = info.h1;
    eTemp.textContent = info.temp;
    
    newHeader.classList.add('header');
    eDate.classList.add('date');
    eTemp.classList.add('temp');
    
    newHeader.append(eDate);
    newHeader.append(eH1);
    newHeader.append(eTemp);
    

    return newHeader;
}

const entryPoint2 = document.querySelector('.header-container');

