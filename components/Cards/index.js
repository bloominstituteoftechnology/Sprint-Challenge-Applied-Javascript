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
const make = (tag = 'div', att = {}, kids = []) => {
    const e = document.createElement(tag);
    Object.keys(att).forEach(k => e.setAttribute(k, att[k]));
    kids.forEach(k => e.appendChild(typeof k === 'string' ? document.createTextNode(k) : k));
    return e;
};

const Article = ({authorName, authorPhoto, headline, topic })=>{
    return make('div', { 'class': 'card' }, [
        make('div', { 'class': 'headline' }, [headline]),
        make('div', { 'class': 'topic' }, [topic]),
        make('div', { 'class': 'author' }, [ 
            make('div', { 'class': 'img-container' }, [
                make('img', { 'src': authorPhoto})
            ]),
            make('span', {}, [`By ${authorName}`])
        ])
    ]);
};

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(({ data: { articles } }) => {
        console.log(articles);
        const contnainer = document.querySelector('.cards-container');
        Object.keys(articles).forEach(topic =>{
            articles[topic].forEach(article => contnainer.appendChild(Article({ ...article, topic })))
        })
    });

