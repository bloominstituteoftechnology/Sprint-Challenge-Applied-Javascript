// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component
let myObj2 = axios.get("https://lambda-times-backend.herokuapp.com/articles")
  .then(response => {
    console.log(response);
    
    response.data.articles.javascript.forEach(item => {
        console.log(item);
        cards.appendChild(articleCreator(item));
    })
    response.data.articles.bootstrap.forEach(item => {
        cards.appendChild(articleCreator(item));
    })
    response.data.articles.technology.forEach(item => {
        cards.appendChild(articleCreator(item));
    })
    response.data.articles.jquery.forEach(item => {
        cards.appendChild(articleCreator(item));
    })
    response.data.articles.node.forEach(item => {
        cards.appendChild(articleCreator(item));
    })
  }) 
  .catch(err => {
    console.log(err);
  })

function articleCreator(dataObj) {
  let card = document.createElement("div");
  let headline = document.createElement("div");
  let author = document.createElement("div");
  let imgDiv = document.createElement("div");
  let img = document.createElement("img");
  let span = document.createElement("span");

  card.classList.add("card");
  headline.classList.add("headline");
  author.classList.add("author");
  imgDiv.classList.add("img-container");

  headline.textContent = dataObj.headline;
  img.src = dataObj.authorPhoto;
  span.textContent = `By ${dataObj.authorName}`;

  card.appendChild(headline);
  card.appendChild(author);
  author.appendChild(imgDiv);
  author.appendChild(span);
  imgDiv.appendChild(img);

  return card;
}

let cards = document.querySelector(".cards-container");
