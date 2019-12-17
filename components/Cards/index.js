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

const cardContainer = document.querySelector('.cards-container');

axios
	.get('https://lambda-times-backend.herokuapp.com/articles')
	.then((res) => {
		const articles = res.data.articles;
		// console.log(articles, 'show articles');
		const bootstrap = articles.bootstrap;
		const javascript = articles.javascript;
		const jquery = articles.jquery;
		const node = articles.node;
		const technology = articles.technology;

		// --- This is one option to do it and then forEach over this to add to the DOM. Array of just javascript articles

		const allArticles = bootstrap.concat(javascript, jquery, node, technology);
		console.log(allArticles, 'Array of articles');
		allArticles.forEach((item) => {
			const createdArticle = newCard(item);
			// console.log(createdArticle, 'Creating in articles');
			cardContainer.appendChild(createdArticle);
		});
	})
	.catch((err) => {
		console.log('Error!', err);
	});

function newCard(obj) {
	//this will create only 1 card. Do not over think this!

	// Creating new elements

	const card = document.createElement('div');
	const headline = document.createElement('div');
	const author = document.createElement('div');
	const imgContainer = document.createElement('div');
	const authorImg = document.createElement('img');
	const authorName = document.createElement('span');

	// appending elements to create structure

	card.appendChild(headline);
	card.appendChild(author);
	author.appendChild(imgContainer);
	imgContainer.appendChild(authorImg);
	author.appendChild(authorName);

	// Added CSS Classes to elements

	card.classList.add('card');
	headline.classList.add('headline');
	author.classList.add('author');
	imgContainer.classList.add('img-container');

	// console.log(card);

	headline.textContent = `${obj.headline}`;
	authorImg.src = obj.authorPhoto;
	authorName.textContent = `${obj.authorName}`;

	return card;
}
