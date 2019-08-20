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
        // let containerCard = document.querySelector('.cards-container')
        // response.data.containerCard.forEach((cards) => {
        //     containerCard.appendChild(createCard(cards))
        // })
        console.log(response)
    }))

    .catch((error) => {
        console.log(error)
    })

    let containerCard = document.querySelector('.cards-container')

    function Card() {
        let card = document.createElement('div')
        card.classList.add('card')
        
        let headline = document.createElement('div')
        headline.classList.add('headline')
        headline.textContent = 'Headline:'
        card.appendChild(headline)
        
        let author = document.createElement('div')
        author.classList.add('author')
        author.textContent = 'Author:'
        card.appendChild(author)

        let img = document.createElement('div')   
        img.classList.add('img-container')
        img.src = authorPhoto_url
        card.appendChild(img)
        
        let span = document.createElement('span')
        span.classList.add('authorName')
        span.textContent = 'By:'
        card.appendChild(author)
        
        let articles = document.createElement('articles')
        articles.textContent = 'articles'
        card.appendChild(articles1)
// do I have to type out articles 1-13? not DRY.

        return card
    };

    // let articlesAll = document.querySelector('articles')

    // articlesAll.forEach((article) => {
    //     let card = Card(article)
    //     container.appendChild(card)
    // })

    // const articles = [
    //     {
    //         headline:'',
    //         name: '',
    //         photo: '',
    // },

    // ]

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
