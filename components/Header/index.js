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

function Header() {

	const headerDiv = document.createElement('div')
	headerDiv.classList.add('header')

	const dateSpan = document.createElement('span')
	dateSpan.classList.add('date')
	dateSpan.textContent = 'SMARCH 28, 2019'

	const h1Lambda = document.createElement('h1')

	const tempSpan = document.createElement('span')
	tempSpan.classList.add('temp')
	tempSpan.textContent = '98\xB0'

	headerDiv.appendChild(dateSpan)
	headerDiv.appendChild(h1Lambda)
	headerDiv.appendChild(tempSpan)

	const headerAnchor = document.querySelector('.header-container');

	return headerAnchor.appendChild(headerDiv)

}



Header()

