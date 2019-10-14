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
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

  function articleCreator(name, photo, headline){
    let divC = document.createElement('div');
    let divH = document.createElement('div');
    let divA = document.createElement('div');
    let divImg = document.createElement('div');
    let spanA = document.createElement('span');
    let imgSource = document.createElement('img');

    divC.classList.add('card');
    divH.classList.add('headline');
    divA.classList.add('author');
    divImg.classList.add('img-container');

    divH.textContent = headline;
    spanA.textContent = `By ${name}`;
    imgSource.src = photo;

    divC.appendChild(divH);
    divC.appendChild(divA);
    divA.appendChild(divImg);
    divA.appendChild(spanA);
    divImg.appendChild(imgSource);

    return divC;
  }

  let cardsContainer = document.querySelector('.cards-container');

  //bootstrap
for (let i = 0; i< 3; i++){


    axios.get(`https://lambda-times-backend.herokuapp.com/articles`)
    .then((response)=> cardsContainer.appendChild(articleCreator(response["data"]["articles"]["bootstrap"][i]["authorName"],response["data"]["articles"]["bootstrap"][i]["authorPhoto"],response["data"]["articles"]["bootstrap"][i]["headline"])))
    .catch(function (error) {
            console.log(error);
          });
    
}

//javascript
for (let i = 0; i< 4; i++){


    axios.get(`https://lambda-times-backend.herokuapp.com/articles`)
    .then((response)=> cardsContainer.appendChild(articleCreator(response["data"]["articles"]["javascript"][i]["authorName"],response["data"]["articles"]["javascript"][i]["authorPhoto"],response["data"]["articles"]["javascript"][i]["headline"])))
    .catch(function (error) {
            console.log(error);
          });
    
}

//jquery
for (let i = 0; i< 3; i++){


    axios.get(`https://lambda-times-backend.herokuapp.com/articles`)
    .then((response)=> cardsContainer.appendChild(articleCreator(response["data"]["articles"]["jquery"][i]["authorName"],response["data"]["articles"]["jquery"][i]["authorPhoto"],response["data"]["articles"]["jquery"][i]["headline"])))
    .catch(function (error) {
            console.log(error);
          });
    
}

//node
for (let i = 0; i< 2; i++){


    axios.get(`https://lambda-times-backend.herokuapp.com/articles`)
    .then((response)=> cardsContainer.appendChild(articleCreator(response["data"]["articles"]["node"][i]["authorName"],response["data"]["articles"]["node"][i]["authorPhoto"],response["data"]["articles"]["node"][i]["headline"])))
    .catch(function (error) {
            console.log(error);
          });
    
}

//technology
for (let i = 0; i< 3; i++){


    axios.get(`https://lambda-times-backend.herokuapp.com/articles`)
    .then((response)=> cardsContainer.appendChild(articleCreator(response["data"]["articles"]["technology"][i]["authorName"],response["data"]["articles"]["technology"][i]["authorPhoto"],response["data"]["articles"]["technology"][i]["headline"])))
    .catch(function (error) {
            console.log(error);
          });
    
}