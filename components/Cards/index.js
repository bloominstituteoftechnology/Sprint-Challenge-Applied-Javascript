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
// Create a card for each of the articles and add the card to the DOM

axios.get('https://lambda-times-backend.herokuapp.com/articles')
     .then(response=>{
         const cardContent=document.querySelector('.cards-container');
         response.data.articles.javascript.forEach(event=>{
             cardContent.appendChild(cardsMaker(event))
             console.log('cardContent', cardContent)
         })

         response.data.articles.bootstrap.forEach(event=>{
            cardContent.appendChild(cardsMaker(event))
           
        })

        response.data.articles.technology.forEach(event=>{
            cardContent.appendChild(cardsMaker(event))
            
        })

        response.data.articles.node.forEach(event=>{
            cardContent.appendChild(cardsMaker(event))
            
        })

        response.data.articles.jquery.forEach(event=>{
            cardContent.appendChild(cardsMaker(event))
            
        })
  })


     function cardsMaker(data){
         //Creating Elements
         const cards= document.createElement('div');
         const headline=document.createElement('div');
         const author=document.createElement('div');
         const image =document.createElement('div');
         const imageSrc=document.createElement('img');
         const authName=document.createElement('span');

         //Adding classNames.

         cards.classList.add('card')
         headline.classList.add("headline");
         author.classList.add("author");
         image.classList.add("img-container");
         
         //Adding content 
          
        headline.textContent=data.headline;
        authName.textContent=`By ${data.authorName}`;
        imageSrc.setAttribute("src" ,data.authorPhoto)
        

        //appending 
        cards.appendChild(headline);
        cards.appendChild(author);
        author.appendChild(image);
        image.appendChild(imageSrc)
        author.appendChild(authName);

        return cards;
     }
     

    