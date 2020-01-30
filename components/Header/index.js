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

	const div = document.createElement('div')
	const span = document.createElement('span')
	const h1 = document.createElement('h1')
	const span2 = document.createElement('span')

	div.classList.add('header')
	span.classList.add('date')
	span.innerText = "SMARCH 28, 2019"
	h1.innerText = "Lambda Times"
	span2.classList.add('temp')
	span2.innerText = "98*"

	div.appendChild(span)
	div.appendChild(h1)
	div.appendChild(span2)

	return div 

}
const head = document.querySelectorAll(".header-container")[0]
head.appendChild(Header())