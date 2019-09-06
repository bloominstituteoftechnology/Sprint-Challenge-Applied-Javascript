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
        debugger
        function cardMaker(){
            let cardContent = resolve.data.articles;
            let cardDivBody = document.querySelector('.cards-container');

            let cardDiv = document.createElement('div');
            let headDiv = document.createElement('div');
            let authorDiv = document.createElement('div');
            let imgDiv = document.createElement('div');
            let img = document.createElement('img');
            let span = document.createElement('span');

            cardDiv.classList.add('card');
            headDiv.classList.add('headline')
            authorDiv.classList.add('author');
            imgDiv.classList.add('img-container');

            let javascript = cardContent.javascript;
            let bootstrap = cardContent.bootstrap;
            let technology = cardContent.technology;
            let jquery = cardContent.jquery;
            let node = cardContent.node;

            let arr =[javascript, bootstrap, technology,jquery, node];
            for(let i =0; i< arr.length; i++){
                headDiv.textContent = arr[i].headline;
                console.log(headDiv);
            }


            
            // nav1.textContent = siteContent["nav"]["nav-item-1"];;

            cardDiv.appendChild(headDiv);
            cardDiv.appendChild(authorDiv);
            authorDiv.appendChild(imgDiv);
            imgDiv.appendChild(img);
            authorDiv.appendChild(span);

            console.log(cardDiv);
            return cardDiv;
        }
        cardMaker()
        
    })
    .catch(error =>{
        debugger
        console.log(error.message)
    })
