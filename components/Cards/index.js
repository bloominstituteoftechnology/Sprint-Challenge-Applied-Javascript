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
const cardsCont=document.querySelector('.cards-container')

        function cardMaker(obj){
            const card=document.createElement('div');
            const headLine=document.createElement('div');
            const author=document.createElement('div');
            const imgCont=document.createElement('div');
            const img=document.createElement('img');
            const authName=document.createElement('span');

            card.appendChild(headLine);
            card.appendChild(author);
            author.appendChild(imgCont);
            author.appendChild(authName);
            imgCont.appendChild(img);

            card.classList.add('card');
            headLine.classList.add('headline');
            author.classList.add('author');
            imgCont.classList.add('img-container');

            headLine.textContent=obj.headline;
            authName.textContent=obj.authorName;
            img.src=obj.authorPhoto;
            
            return card
            }            
                      
    axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(res=>{console.log(res)
        let cardData=Object.values(res.data.articles);
        cardData.forEach((art) => {
            let newArt=art;
            newArt.forEach((post)=>{
                let newPost= cardMaker(post);
                cardsCont.appendChild(newPost)
                } 
            )
        })
    })
    .catch(err=>{console.log(err)})
