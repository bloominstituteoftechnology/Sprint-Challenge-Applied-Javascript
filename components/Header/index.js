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

    //Creating Elements
    const headerTitle= document.createElement('div');
    const date=document.createElement('span');
    const title =document.createElement('h1');
    const temp=document.createElement('span');

    //Creating class Names 

    headerTitle.classList.add('header');
    date.classList.add('date');
    temp.classList.add('temp');

    //Adding content 
    date.textContent='SMARCH 28,2019'
    title.textContent='Lamda Times';
    temp.textContent='98° ';

    //appending 

    headerTitle.appendChild(date);
    headerTitle.appendChild(title);
    headerTitle.appendChild(temp);
    



    return headerTitle;
}

let headerContainer= document.querySelector('.header-container')
headerContainer.appendChild(Header());

console.log('headerContainer', headerContainer);
