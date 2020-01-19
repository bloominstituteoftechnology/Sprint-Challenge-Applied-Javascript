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
let cardsContainer = document.querySelector('.cards-container');
axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(res => {
    console.log(res);
    let data = res.data.articles;
    let entries = Object.values(data);
    entries.forEach(el => {
        el.forEach(element => {
            cardsContainer.append(createCard(element))
        })
    })

    // console.log(res)
    // let temp = res.data.articles;
    // let entries = Object.keys(temp);
    // entries.forEach(key1 => {
    //     key1.forEach(el => {
    //         cardsContainer.append(createCard(el))
    //     })
    // })
})
.catch(error =>{
    console.log(error)
});

function createCard(object){
    //creating elements
    let card = document.createElement('div'),
        headline = document.createElement('div'),
        author = document.createElement('div'),
        imgContainer = document.createElement('div'),
        image = document.createElement('img'),
        by = document.createElement('span');
    //element class(s)
    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');
    //structuring of elements
    card.append(headline);
    card.append(author);
    author.append(imgContainer);
    imgContainer.append(image);
    author.append(by);
    //textContent
    headline.textContent = object.headline;
    image.src = object.authorPhoto;
    by.textContent = object.authorName;

    return card;
};