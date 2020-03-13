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
    const 
    head = document.createElement('div'),
    date = document.createElement('span'),
    mainTitle = document.createElement('h1'),
    temp = document.createElement('span');

    date.textContent = 'SMARCH 28, 2019';
    mainTitle.textContent = 'Lambda Times';
    temp.textContent = '98°';

    head.classList.add('header');
    date.classList.add('date');
    temp.classList.add('temp');

    head.append(date);
    head.append(mainTitle);
    head.append(temp);

    return head;

}

document.querySelector('.header-container').append(Header());