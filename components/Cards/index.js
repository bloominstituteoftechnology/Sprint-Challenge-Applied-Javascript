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

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        console.log(response)
    })
    .catch((error) => {
        console.log(error)
    })

    const containerCard = document.querySelector('.cards-container')

    function Card(array) {
        let card = document.createElement('div')
        card.classList.add('headline')

        const headline = document.createElement('div')
        headline.textContent = `Headline: ${array.headline}`
        card.appendChild(headline)

        const author = document.createElement('div')
        author.textContent = `Author: ${array.authorName}`
        author.appendChild(author)

        const img = document.createElement('div')   
        img.classList.add('img-container')
        img.src = array.authorPhoto_url

        const span = document.createElement9('span')
        span.textContent = `${array.authorName}`
        author.appendChild(span)

        return card
    }

    // const data = [
    //     {
    //         headline:''
    //         name: ''
    //         photo: ''
    // },

    // ]

    // data.forEach((item) => {
    //     let article = articleCreator(item);
    //     containerCard.appendChild(article);
    // });
