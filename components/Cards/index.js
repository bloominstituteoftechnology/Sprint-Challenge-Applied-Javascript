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

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then((response => {
        // console.log(response);
        let containerCard = document.querySelector('.cards-container')
        let arrayValues = Object.values(response.data.articles);
        arrayValues.forEach(element => {
            element.forEach(article => {
            containerCard.appendChild(Card(article))
        })
    })
}))

    .catch((error) => {
        console.log(error)
    })

    function Card(object) {
        let card = document.createElement('div')
        card.classList.add('card')
        
        let headlines = document.createElement('div')
        headlines.classList.add('headline')
        headlines.textContent = object.headline
        card.appendChild(headlines)
        
        let authors = document.createElement('div')
        authors.classList.add('author')
        card.appendChild(authors)

        let pic = document.createElement('div')   
        pic.classList.add('img-container')
        authors.appendChild(pic)

        let img = document.createElement('img')
        img.src = object.authorPhoto
        pic.appendChild(img)

        let span = document.createElement('span')
        span.textContent = 'By: ' + object.authorName
        pic.appendChild(span)

        return card
    };

    // let articlesAll = document.querySelector('articles')

    // articlesAll.forEach((article) => {
    //     let card = Card(article)
    //     container.appendChild(card)
    // })


// articles.forEach((item) => {
//     axios.get('https://lambda-times-backend.herokuapp.com/articles')
//     .then(response => {
//     //     let article = Card(item);
//     //     containerCard.appendChild(article);
//     // });
//         document.querySelector('topics').appendChild(card(response.data))
//     .catch(err => console.log(err))
//     })
// })
