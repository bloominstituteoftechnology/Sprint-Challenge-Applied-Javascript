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

const cardsCont = document.querySelector('.cards-container');

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response =>{
        const articlesObj = response.data.articles;
        for (let key in articlesObj){
            if(articlesObj.hasOwnProperty(key)){
                articlesObj[key].forEach(article => {
                    cardsCont.appendChild(Article(article));
                })
            }
        }
    })
    .catch(err => {
        console.log("bummer, you got an error: ", err);
    })

function Article(data){
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imgCont = document.createElement('div');
    const img = document.createElement('img');
    const authorName = document.createElement('div');

    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imgCont);
    imgCont.appendChild(img);
    author.appendChild(authorName);

    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgCont.classList.add('img-container');

    headline.textContent = data.headline;
    authorName.textContent = data.authorName;
    img.src = data.authorPhoto;

    return card;
}