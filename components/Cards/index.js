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
    .then(resolve =>{
        function cardMaker({headline, authorPhoto, authorName}){

            let cardDiv = document.createElement('div');
            let headDiv = document.createElement('div');
            let authorDiv = document.createElement('div');
            let imgDiv = document.createElement('div');
            let img = document.createElement('img');
            let span = document.createElement('span');

            headDiv.textContent = headline;
            span.textContent = authorName;
            img.setAttribute('src', authorPhoto);
        
            cardDiv.classList.add('card');
            headDiv.classList.add('headline')
            authorDiv.classList.add('author');
            imgDiv.classList.add('img-container');
        
            cardDiv.appendChild(headDiv);
            cardDiv.appendChild(authorDiv);
            authorDiv.appendChild(imgDiv);
            imgDiv.appendChild(img);
            authorDiv.appendChild(span);
        
            // console.log(cardDiv);
            return cardDiv;
        }

        let cardContent = Object.values(resolve.data.articles);
        let cardDivBody = document.querySelector('.cards-container');

        let javaScript = cardContent[0];
        let javaComponent = javaScript.map(cardMaker);
        javaComponent.forEach((element) => {
            cardDivBody.appendChild(element);
        });
        console.log(cardDivBody);

        let bootstrap = cardContent[1];
        let c=bootComponent = bootstrap.map(cardMaker);
        bootComponent.forEach((element) => {
            cardDivBody.appendChild(element);
        });
        console.log(cardDivBody);

        let technology = cardContent[2];
        let techComponent = technology.map(cardMaker);
        techComponent.forEach((element) => {
            cardDivBody.appendChild(element);
        });
        console.log(cardDivBody);
        
        let jquery = cardContent[3];
        let jqueryComponent = jquery.map(cardMaker);
        jqueryComponent.forEach((element) => {
            cardDivBody.appendChild(element);
        });
        console.log(cardDivBody);

        let node = cardContent[4];
        let nodeComponent = node.map(cardMaker);
        nodeComponent.forEach((element) => {
            cardDivBody.appendChild(element);
        });
        console.log(cardDivBody);
        
    })
    .catch(error =>{
        console.log(error.message)
    })
