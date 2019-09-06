// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// Create a component for each 'article' in the list.
// This won't be as easy as just iterating over an array.
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



function createArticle(obj){
    let card = document.createElement('div');
    let author = document.createElement('div');
    let headline = document.createElement('div');
    let imgContainer = document.createElement('div');
    let image = document.createElement('img');
    let authorName = document.createElement('span');

    //classes
    card.classList.add('card');
    author.classList.add('author')
    headline.classList.add('headline');
    imgContainer.classList.add('img-container');

    //text content
    headline.textContent = `${obj.headline}`;
    image.src = obj.authorPhoto;
    authorName.textContent = `By ${obj.authorName}`;
    
    //append
    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imgContainer);
    imgContainer.appendChild(image);
    author.appendChild(authorName);

    return card;
}

const cardsContainer = document.querySelector('.cards-container');

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response=> {
    console.log(response);
    response.data.articles.bootstrap.forEach(item=> {
            let newArticle = createArticle(item);
            cardsContainer.appendChild(newArticle);
    });
})
.catch(error => {
    console.log(`AGH!`, error);
  });

  axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response=> {
    console.log(response);
    response.data.articles.javascript.forEach(item=> {
            let newArticle = createArticle(item);
            cardsContainer.appendChild(newArticle);
    });
})
.catch(error => {
    console.log(`AGH!`, error);
  });


  axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response=> {
    console.log(response);
    response.data.articles.jquery.forEach(item=> {
            let newArticle = createArticle(item);
            cardsContainer.appendChild(newArticle);
    });
})
.catch(error => {
    console.log(`AGH!`, error);
  });


  axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response=> {
    console.log(response);
    response.data.articles.node.forEach(item=> {
            let newArticle = createArticle(item);
            cardsContainer.appendChild(newArticle);
    });
})
.catch(error => {
    console.log(`AGH!`, error);
  });

  axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response=> {
    console.log(response);
    response.data.articles.technology.forEach(item=> {
            let newArticle = createArticle(item);
            cardsContainer.appendChild(newArticle);
    });
})
.catch(error => {
    console.log(`AGH!`, error);
});

