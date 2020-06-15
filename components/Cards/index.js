// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.




axios
.get('https://lambda-times-backend.herokuapp.com/articles')

axios.get('https://lambda-times-backend.herokuapp.com/articles')
        .then(response => {
           console.log(response);
           let articles = response.data.articles;
           for (let topic in articles){
            //    console.log(topics);
            for(let article in articles[topic]){
                document.body.append(cardCreator(articles[topic][article]));
            }
           }
            
        })
.catch(error=>{
    console.log('there is an error', error);
})

function cardCreator(content){
    let card = document.createElement('div');
    card.classList.add('card');

    let headline= document.createElement('div');
    headline.classList.add('headline');
    headline.textContent = content.headline;
    card.appendChild(headline);

    let author = document.createElement('div');
    author.classList.add('author');

    let imgContainer = document.createElement('div');
    imgContainer.classList.add('img-container');

    let image = document.createElement('img');
    image.src = content.authorPhoto;
    imgContainer.appendChild(image);

    let authorsName= document.createElement('span');
    authorsName.textContent = `By ${content.authorName}`;
    author.appendChild(authorsName);
    author.appendChild(imgContainer);
    card.appendChild(author);

    return card;
}