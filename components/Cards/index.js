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

//console.log(axios.get('https://lambda-times-backend.herokuapp.com/articles'))
// axios.get('https://lambda-times-backend.herokuapp.com/articles')
//     .then(response => {
//         const data = response.data.articles;
//         const keys = Object.keys(data);
//         keys.forEach(key =>
//              data[key].forEach(element => Article(element)));
//     })

const cardsContainer = document.querySelector('.cards-container')

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response => {
    //console.log(response);
    const key = Object.keys(response.data.articles)
    key.forEach(item => {
        console.log(response);
        response.data.articles[item].forEach(item => {
            cardsContainer.appendChild(Article(item))
        })
    })
});
   // .catch(err => console.log('Error!!', err)

function Article(obj){
const card = document.createElement('div')
card.classList.add('card')

const Headline = document.createElement('div')
Headline.classList.add('headline')
Headline.textContent = obj.headline
card.appendChild(Headline)

const author = document.createElement('div')
author.classList.add('author')
card.appendChild(author)

const proPhoto = document.createElement('div')
proPhoto.classList.add('img-container')
author.appendChild(proPhoto)

const pro = document.createElement('img')
pro.src = obj.authorPhoto
proPhoto.appendChild(pro)

const name = document.createElement('span')
name.textContent = `By ${obj.authorName}`
proPhoto.appendChild(name)

console.log(card)

return card
}
