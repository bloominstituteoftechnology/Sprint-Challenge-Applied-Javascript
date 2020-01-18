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
const cardContainer = document.querySelector('.cards-container')

axios.get('https://lambda-times-backend.herokuapp.com/articles')
 .then(response => {
     console.log(response.data.articles)
     Object.values(response.data.articles).forEach(elements => {
         elements.forEach(element =>{
            cardContainer.appendChild(createCards(element)) 
         })
     });
 }) 
 .catch(error => {

 })

 function createCards(obj){
    const newCard = document.createElement('div'),
        newHeadLine = document.createElement('div'),
        newAuthor = document.createElement('div'),
        newImgContainer = document.createElement('div'),
        newImg= document.createElement('img'),
        newSpan = document.createElement('span')
    //add classes
        newCard.classList.add("card");
        newHeadLine.classList.add("headline");
        newAuthor.classList.add("author");
        newImgContainer.classList.add("img-container");
    //add content
        newHeadLine.textContent = obj.headline;
        newImg.setAttribute("src", obj.authorPhoto);
        newSpan.textContent = obj.authorName;

    // append

        newCard.appendChild(newHeadLine);
        newCard.appendChild(newAuthor);
        newAuthor.appendChild(newImgContainer);
        newAuthor.appendChild(newSpan);
        newImgContainer.appendChild(newImg);

        return newCard
 }
