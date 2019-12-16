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


cardsContainer = document.querySelector('.cards-container')

function Article (props) {
    let 
        card = document.createElement('div')
        headLine = document.createElement('div')
        author = document.createElement('div')
        imgCont = document.createElement('div')
        pic = document.createElement('img')
        authorsName = document.createElement('span')

        card.classList.add('card')
        headLine.classList.add('headline')
        author.classList.add('author')
        imgCont.classList.add('img-container')



        card.appendChild(headLine)
        card.appendChild(author)
        author.appendChild(imgCont)
        imgCont.appendChild(pic)
        author.appendChild(authorsName)


        headLine.textContent = props.headline
        authorsName.textContent = props.authorName
        pic.src = props.authorPhoto

    return card;
};

axios.get(`https://lambda-times-backend.herokuapp.com/articles`)
    .then(request => {
        //console.log(request.data.articles)//
        let data1 = request.data.articles
        let reData = Object.values(data1)
        //console.log(reData)//
        reData.forEach( i => {
            //console.log(i)//
            i.forEach( j => {
                //console.log(j)//
                cardsContainer.appendChild(Article(j))
            })

        })
    })
    .catch(error => {
        //console.log(error)//
    })

