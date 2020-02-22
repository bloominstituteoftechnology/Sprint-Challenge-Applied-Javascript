// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
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

const cardsCont = document.querySelector('.cards-container');

// const jscard = document.createElement('div');
// jscard.textContent = 'JS Card';
// const bootstrap = document.createElement('div');
// bootstrap.textContent = 'Boot Card';
// const technology = document.createElement('div');
// technology.textContent = 'Tech Card';
// const jquery = document.createElement('div');
// jquery.textContent = 'JQuery Card';
// const node = document.createElement('div');
// node.textContent = 'Node Card';
//
// cardsCont.appendChild(jscard);
// cardsCont.appendChild(bootstrap);
// cardsCont.appendChild(technology);
// cardsCont.appendChild(jquery);
// cardsCont.appendChild(node);


function Card (someCard, i) {
  const mycard = document.createElement('div');
  mycard.classList.add('card');

  // inside card
  const headlineCard = document.createElement('div');
  headlineCard.classList.add('headline');
  headlineCard.textContent = someCard[i];//headline article

  const author = document.createElement('div');
  author.classList.add('author');

  // inside author
  const imgCont = document.createElement('div');
  imgCont.src = 'replace with img url';//url author image

  const authorName = document.createElement('span');
  authorName.textContent = 'replace auth name';//author name

  // inside imgCont
  const authorImg = document.createElement('img');

  imgCont.appendchild(authorImg);

  author.appendchild(imgCont);
  author.appendchild(authorName);

  mycard.appendchild(headlineCard);
  mycard.appendchild(author);

  return mycard;

}

let dataObj = [];

axios.get('https://lambda-times-backend.herokuapp.com/articles')
  .then(function (response) {
    // handle success
    dataObj.push(response.data.articles);
    dataObj.forEach((item, i) => {
      let newCard = Card(item, i);
      cardsCont.appendChild(newCard);
    });

  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });
