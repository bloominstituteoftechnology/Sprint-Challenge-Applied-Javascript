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
		console.log(articles, 'show articles');
		Object.keys(articles).forEach((item) => {
			const newArticle = newCard(item);
			console.log(newArticle, 'Adding in articles');
			cardContainer.appendChild(newArticle);
		});
	})
	.catch((err) => {
		console.log('Error!', err);
	});

function newCard(obj) {
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

	console.log(card);

	headline.textContent = obj;
	imgContainer.src = obj.authorPhoto;
	authorName.textContent = obj.authorName;

	return card;
}

// cardContainer.appendChild(newCard());
