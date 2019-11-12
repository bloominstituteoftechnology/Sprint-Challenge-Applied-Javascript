// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
/* <div class="card">
  <div class="headline">{Headline of article}</div>
  <div class="author">
    <div class="img-container">
      <img src={url of authors image} />
    </div>
    <span>By {authors name}</span>
  </div>
</div> */
//
// Create a card for each of the articles and add the card to the DOM.


function createCard(object){
    
    const mainCard = document.createElement('div');
    const mainHead = document.createElement('div');
    const authorCard = document.createElement('div');
    const imgCont = document.createElement('div');
    const dogImg = document.createElement('img');
    const authName = document.createElement('span')


    mainCard.appendChild(mainHead);
    mainCard.appendChild(authorCard);
    authorCard.appendChild(imgCont);
    imgCont.appendChild(dogImg);
    authorCard.appendChild(authName);

    mainCard.classList.add('card');
    mainHead.classList.add('headline');
    authorCard.classList.add('author');
    imgCont.classList.add('img-container');

    dogImg.src = object.authorPhoto;

    authName.textContent = "By " + object.authorName;

    return mainCard;
}



axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then((response)=>{
    let cardCont = document.querySelector('.cards-container')
    let cardArr = Object.values(response.data.articles)
    cardArr.forEach(element=>{
        element.forEach(article =>{
            cardCont.appendChild(createCard(article))
            console.log("Card Created")
        })
    })
})
.catch((error)=>{
    console.log(error)
})