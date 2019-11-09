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

// axios.get('https://lambda-times-backend.herokuapp.com/articles')
//   .then(function (response) {
//     // handle success
//     console.log(response);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .finally(function () {
//     // always executed
//   });

  /////////////////////////////////

  function lambdaArticles(info) {

    //create Elements
    const lambdaCard = document.createElement('div');
    const lambdaHeadLine = document.createElement('div');
    const lambdaAuthor = document.createElement('div');
    const lambdaImgContainer = document.createElement('div');
    const lambdaImg = document.createElement('img');
    const lambdaName = document.createElement('span');

    //adding classes
    lambdaCard.classList.add('card');
    lambdaHeadLine.classList.add('headline');
    lambdaAuthor.classList.add('author');
    lambdaImgContainer.classList.add('img-container');

    //add to parent
    lambdaCard.appendChild(lambdaHeadLine);
    lambdaCard.appendChild(lambdaAuthor);
    lambdaCard.appendChild(lambdaImgContainer);
    lambdaCard.appendChild(lambdaImg);
    lambdaCard.appendChild(lambdaName);

    //add content
    lambdaHeadLine.textContent = info.headline;
    lambdaAuthor.textContent = info.authorName;
    lambdaImg.src = info.authorPhoto;


    //add event listeners

    return lambdaCard;

  };

  ///////////////////////////////////////////////

  axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then((response) => {
      response.data.articles.bootstrap.forEach(items => {
        console.log(items);
        const arts = lambdaArticles(items);
        entryArt.appendChild(arts);
      });
    });
    // .catch(err => {
    //   console.log(err);
    // });

    ////////////////////////////////////////////

    axios.get('https://lambda-times-backend.herokuapp.com/articles')
      .then((response) => {
        response.data.articles.javascript.forEach(items => {
          console.log(items);
          const arts = lambdaArticles(items);
          entryArt.appendChild(arts);
        });
      });

    ////////////////////////////////////////////////

    axios.get('https://lambda-times-backend.herokuapp.com/articles')
      .then((response) => {
        response.data.articles.jquery.forEach(items => {
          console.log(items);
          const arts = lambdaArticles(items);
          entryArt.appendChild(arts);
        });
      });

    ////////////////////////////////////////////////////

    axios.get('https://lambda-times-backend.herokuapp.com/articles')
      .then((response) => {
        response.data.articles.node.forEach(items => {
          console.log(items);
          const arts = lambdaArticles(items);
          entryArt.appendChild(arts);
        });
      });

    ///////////////////////////////////////////////////////

    axios.get('https://lambda-times-backend.herokuapp.com/articles')
      .then((response) => {
        response.data.articles.technology.forEach(items => {
          console.log(items);
          const arts = lambdaArticles(items);
          entryArt.appendChild(arts);
        });
      });

    const entryArt = document.querySelector('.cards-container');
