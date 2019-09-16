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

function Card( heading, pic, authName ) {
  // add elements
  const card = document.createElement('div');
  const headline = document.createElement('div');
  const author = document.createElement('div');
  const imgContainer = document.createElement('div');
  const img = document.createElement('img');
  const name = document.createElement('span');

  // add classes
  card.classList.add('card');
  headline.classList.add('headline');
  author.classList.add('author');
  imgContainer.classList.add('img-container');
  
  // add content: 
  headline.textContent = heading;
  img.src = pic;
  name.textContent = `By ${authName}`;

  // append elements
  card.appendChild(headline);
  headline.appendChild(author);
  author.appendChild(imgContainer);
  imgContainer.appendChild(img);
  author.appendChild(name);

  return card;
}

let articleArray = [];
const cardsContainer = document.querySelector('.cards-container');
// console.log(cardsContainer)

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then( response => {
  // console.log(response.data.articles);
  let articleList = response.data.articles;
  Array.from(articleList);
  // console.log(articleList);
  for (topic in articleList) {
    // console.log(topic);
    articleArray.push(topic);
  }
  // console.log(articleArray)
  articleArray.forEach( topic => {
    let data = articleList[topic];
    
    data.forEach( item => {
      // console.log(item)
      let heading = item.headline;
      let pic = item.authorPhoto;
      let authName = item.authorName;
      cardsContainer.appendChild(Card(heading, pic, authName));
    })
  })
})

.catch( err => {
  console.log(err);
})


console.log(Card());