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



const createCards = (user)=> {

const card = document.createElement('div');
card.classList.add('card');

const headline = document.createElement('div');
headline.classList.add('div');

const imageC = document.createElement('div');
imageC.classList.add('img-container');


const span = document.createElement('span');

const hTags = [];
for(let i = 0; i < i.length; i++){
    hTags.push(document.createElement('p'))
}

hTags[0].textContent = user.headline;
hTags[1].textContent = user.authorPhoto;
hTags[2].textContent = user.authorName;



return card
}














axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then((response) => {
    console.log(response.data.message);
})
.catch((error) =>{
    console.log('Network request was unsuccessful')
    console.log(error)
})