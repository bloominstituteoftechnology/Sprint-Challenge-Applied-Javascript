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


function articleCards(info) {
    const newCard = document.createElement('div'),
          eHeadline = document.createElement('div'),
          eAuthor = document.createElement('div'),
          eImage = document.createElement('div'),
          eImgsrc = document.createElement('img'),
          eName = document.createElement('span');
     
    eHeadline.textContent = info.headline;
    eImgsrc.src = info.authorPhoto;
    eName.textContent = info.authorName;
    
    newCard.classList.add('card');
    eHeadline.classList.add('headline');
    eAuthor.classList.add('author');
    eImage.classList.add('img-container');
    
    newCard.append(eHeadline);
    newCard.append(eAuthor);
    eAuthor.append(eImage);
    eImage.append(eImgsrc);
    eAuthor.append(eName);

    return newCard;
}
   
  const entryPoint = document.querySelector('.cards-container');
  
  
  axios.get("https://lambda-times-backend.herokuapp.com/articles")
    .then(response => {
    console.log(response.data)
    const newArray = response.data.articles;

    for (topic in newArray) {
        newArray[topic].forEach(item => {
        entryPoint.appendChild(articleCards(item))
    });
 }});
  
//   javascript.forEach(item => {
//     axios.get(item)
//     .then(response => {
//       console.log(response.data)
//       entryPoint.append(articleCards(response.data));
//     })
//     .catch(error => {
//       console.log("the data was not returned", error)
//     });
//   });
