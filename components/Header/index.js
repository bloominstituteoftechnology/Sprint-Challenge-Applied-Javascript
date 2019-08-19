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
const headerContainer = document.querySelector('.header-container');

//nest variables inside function
function makeHeader() {
	//create and attach a header element to the DOM, name it, and date it
	const Header = document.createElement('div');
	Header.classList.add('header');
    document.querySelector('.header-container').appendChild(Header);
    
    const Temperature = document.createElement('span')
	Temperature.classList.add('temp')
	Temperature.textContent = '98°';
    Header.appendChild(Temperature);  
    
    const headTitle = document.createElement('h1');
	headTitle.textContent = 'Lambda Times';
    Header.appendChild(headTitle);
    
    const theDate = document.createElement('span');
	theDate.classList.add('date');
	theDate.textContent = 'March 28, 2019';
	Header.appendChild(theDate);
    //execute the create element variable for the header in scope
	return Header;
};

makeHeader();
