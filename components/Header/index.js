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

function Header(param) {
	// creating elements for HTML

	const mainHeader = document.createElement('div');
	const date = document.createElement('span');
	const lambdaTimes = document.createElement('h2');
	const temp = document.createElement('span');

	// Appending elements to create structure

	mainHeader.appendChild(date);
	mainHeader.appendChild(lambdaTimes);
	mainHeader.appendChild(temp);

	// Adding Classes to Elements

	mainHeader.classList.add('header');
	date.classList.add('date');
	temp.classList.add('temp');
}
