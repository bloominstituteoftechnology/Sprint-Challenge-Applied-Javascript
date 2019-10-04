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




function cardCreator(arg) {

    const card = document.createElement('div')
    const headline = document.createElement('div')
    const author = document.createElement('div')
    const imgContainer = document.createElement('div')
    const img = document.createElement('img')
    const authorsName = document.createElement('span')

    card.classList.add('card')
    headline.classList.add('headline')
    author.classList.add('author')
    imgContainer.classList.add('img-container')


    card.appendChild(headline)
    card.appendChild(author)
    author.appendChild(imgContainer)
    imgContainer.appendChild(img)
    author.appendChild(authorsName)

    authorsName.textContent = arg.authorName
    img.src = arg.authorPhoto
    headline.textContent = arg.headline

    return card

}
const entryPoint = document.querySelector('.cards-container')

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(arg => {
        let articles = arg.data.articles
        for (topic in articles) {
            articles[topic].forEach(item => {
                entryPoint.appendChild(cardCreator(item))
            });
        }
    })



        //     .then(arg => {
//         console.log(arg)
//         arg.data.articles.map().forEach(item =>{
//         articles.appendChild(cardCreator(item))
//         })


//     })

    // <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>



    // axios.get('https://lambda-times-backend.herokuapp.com/topics')
    // .then(arg => {
    //     console.log(arg)
    //     arg.data.topics.forEach(item => {
    //         topics.appendChild(tabCreator(item))
    //     });
    // })