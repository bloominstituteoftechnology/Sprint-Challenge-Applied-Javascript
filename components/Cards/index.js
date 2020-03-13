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
.then(response=>{

 //   console.log(response.data);
    Object.keys(response.data.articles).forEach(subject=>{
 //       cardsMake(response.data.article[element]);
       // console.log(element);
       
        response.data.articles[subject].forEach(attribute=>{
            document.querySelector('.cards-container').append(cardsMake(attribute));
        console.log(attribute);
        })
      //  document.querySelector('cards-container').append(cardsMake(response.data.articles[element]));
        //console.log (cardsMake(response.data.articles[element]));
        //console.log(element);
        //console.log(response.data.articles[element])
        //
    });
})
.catch(error=>{console.log(error);
});

function cardsMake(datum){
    const divCardMake=
        document.createElement('div');
    const divHeadlineMake=
        document.createElement('div');
    const divAuthorMake=
        document.createElement('div');
    const divImgMake=
        document.createElement('div');
    const imgMake=
        document.createElement('img');
    const spanMake=
        document.createElement('span');
    divCardMake.append(divHeadlineMake);
    divCardMake.append(divAuthorMake);
    divAuthorMake.append(divImgMake);
    divAuthorMake.append(spanMake);
    divImgMake.append(imgMake)
    divCardMake.classList.add('card');
    divHeadlineMake.classList.add('headline')
    divAuthorMake.classList.add('author');
    divImgMake.classList.add('img-container');
    divHeadlineMake.textContent=datum.headline;
    imgMake.src=datum.authorPhoto;
    spanMake.textContent=datum.authorName;
    
    console.log (datum);
    return divCardMake;
};