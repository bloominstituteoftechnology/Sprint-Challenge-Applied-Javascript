// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.



const cardHeader = document.querySelector(".cards-container");

axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then(response => {
    console.log(response.data.articles);
    const mainTopics = Object.entries(response.data.articles);

    mainTopics.forEach(subject => {
      subject[1].forEach(data => {
        const newCard = Article(data);
        cardHeader.append(newCard);
      });
    });
  })
  .catch(error => {
    return alert(error);
  });

function Article(data) {
  const card = document.createElement("div"),
  Header = document.createElement("div"),
  cardAuthorBox = document.createElement("div"),
  cardImgCont = document.createElement("div"),
  cardImg = document.createElement("img"),
    
    cardAuthor = document.createElement("span");
    cardAuthorBox.classList.add("author");
    cardAuthor.textContent = data.authorName;

    card.classList.add("card");
    Header.classList.add("headline");

    cardImgCont.classList.add("img-container");

    Header.textContent = data.headline;
    cardImg.src = data.authorPhoto;
  

    card.append(Header);
    card.append(cardAuthorBox);
    cardAuthorBox.append(cardImgCont);
    cardImgCont.append(cardImg);
    cardAuthorBox.append(cardAuthor);

  return card;
}