// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function createCard(data) {
	
	//Tags
	const card = document.createElement('div');
	const headline = document.createElement('div');
	const author = document.createElement('div');
	const imgContainer = document.createElement('div');
	const img = document.createElement('img');
	const name = document.createElement('span');

	//Structure
	card.appendChild(headline);
	card.appendChild(author);
	card.appendChild(name);
	author.appendChild(imgContainer);
	imgContainer.appendChild(img);
	author.appendChild(name);

	//Style
	card.classList.add('card');
	headline.classList.add('headline');
	author.classList.add('author');
	imgContainer.classList.add('img-container');

	//Content
	headline.textContent = data.headline;
	name.textContent = `By ${data.authorName}`;
	img.setAttribute("src", data.authorPhoto);

	return card;

}

//Insert point
const insertIntoCardContainer = document.querySelector('.cards-container');

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response => {

	Object.values(response.data.articles).forEach(articleSet => {

		articleSet.forEach(singleCard => {		
			insertIntoCardContainer.appendChild(createCard(singleCard));
		})//articleSet loop

	})//singleCard loop

})//then statement
.catch(err => {
	console.log('~!ERROR!~', err);
})