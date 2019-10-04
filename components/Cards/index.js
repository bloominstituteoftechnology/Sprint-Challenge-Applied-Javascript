// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: 
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
let card = document.querySelector("card")
axios
    .get("https://lambda-times-backend.herokuapp.com/articles")
        .then(response => {
            console.log(response.data)
            card.appendChild(myArticle(response.data))
        })

        .catch(err => {console.log("Error:", err)
    })

    let theCard = document.createElement("div")
    theCard.classList.add("card")

    let headline = document.createElement("div")
    headline.classList.add("headline")
    theCard.appendChild(headline)
    headline.textContent = `${response.data.articles.javacript}`