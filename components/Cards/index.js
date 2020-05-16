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
entryPoint = document.querySelector('.cards-container')
//Axios Get
axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then((response) => {
    console.log('card', response)
    const articleKeys = Object.keys(data.articles)
    articleKeys.forEach( (element) => {
        console.log ('check', data.articles[element]) 
        entryPoint.append(cardMaker(element))
    })
})
.catch(err =>{
    err
})

function cardMaker(item){
    //Create Elements
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imgCo = document.createElement('div');
    const img = document.createElement('img');
    const span = document.createElement('span');
    //Class Names
    card.classList.add('card')
    headline.classList.add('headline')
    author.classList.add('author')
    imgCo.classList.add('img-container')
    //Text Content
    headline.textContent = item.headline
    img.src = item.authorPhoto
    span.textContent = item.authorName
    //Appending
    card.append('headline')
    card.append('author')
    author.append('imgCo')
    imgCo.append('img')
    author.append('span')
    //Returning
    return card
}