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

function createAritcle(array){

    const articleCard = document.createElement('div');
    const headlineCard = document.createElement('div');
    const authorCard = document.createElement('div');
    const imgContainer= document.createElement('div');
    const authorImg = document.createElement('img');
    const authorName = document.createElement('span');


    
    authorName.textContent= `Name ${array.authorName} ` ;
    authorImg.src= array.authorPhoto ;
    headlineCard.textContent= ` Headline ${array.headline}`;

    articleCard.appendChild(headlineCard);
    articleCard.appendChild(authorCard);
    authorCard.appendChild(imgContainer);
    imgContainer.appendChild(authorImg);
    authorCard.appendChild(authorName);

    articleCard.classList.add('card');
    headlineCard.classList.add('headline');
     authorCard.classList.add('author');


    return articleCard
}

const containerCards = document.querySelector('.cards-container')



 axios.get('https://lambda-times-backend.herokuapp.com/articles')
 .then(response => {
      const newobj = (response.data.articles);
      for(let i in newobj){
        newobj[i].forEach(par =>{
        let endCards = createAritcle(par);  
        containerCards.appendChild(endCards);
        })
    } 
 })

      















// const articleArray = [('https://lambda-times-backend.herokuapp.com/articles')]


// articleArray.forEach(e =>{
//     axios.get(e)
//     .then(response => {
//         console.log(response);
//         const endCards = createAritcle(response.data.articles);
//         containerCards.appendChild(endCards);
//     })
// })

//  axios.get('https://lambda-times-backend.herokuapp.com/articles')
//  .then(response => {
//      console.log(response);

//      const endCards = createAritcle(response.data.articles);
//      containerCards.appendChild(endCards);
//  })


