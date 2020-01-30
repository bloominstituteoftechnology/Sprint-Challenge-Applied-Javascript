// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//


// const Http = new XMLHttpRequest();
// const url='https://lambda-times-backend.herokuapp.com/articles';
// Http.open("GET", url);
// Http.send();



// Http.onreadystatechange = (e) => {
//   const res = Http.responseText
//  const job = JSON.parse(res)
//  const article = job.articles	// main object
//  const arr = Object.entries(article)

// let newArr = []

// arr.forEach(arrObjects=>{
// 	arrObjects.forEach( arrArr => {
// 		console.log(arrArr)
		
// 	})
// })

// console.log(e)
// // for (let [card, [value] ] of Object.entries(article)) {
// //   console.log(`${card}: ${value}  `);
// // }
const articleReq= axios.get( "https://lambda-times-backend.herokuapp.com/articles")

articleReq.then(res=> {
	const article= res.data.articles
	const obj = Object.entries(article)
	const newObj = Object.fromEntries(obj)



 const o = newObj.javascript
 const o1 = newObj.bootstrap
 const o2 = newObj.technology
 const o3 = newObj.jquery
 const o4 = newObj.node



function createDom(obj){
	const div1card = document.createElement('div')
	const div2headline= document.createElement('div')
	const div3author= document.createElement('div')
	const div4img= document.createElement('div')
	const img = document.createElement('img')
	const span = document.createElement('span')

	div1card.classList.add('card')
	div2headline.classList.add('headline')
	div2headline.innerText = `${obj.headline}`
	div3author.classList.add('author')
	div4img.classList.add('img-container')
	img.src = `${obj.authorPhoto}`
	span.innerText = `By ${obj.authorName}`


	div1card.appendChild(div2headline)
	div1card.appendChild(div3author)
	div3author.appendChild(div4img)
	div4img.appendChild(img)
	div4img.appendChild(span)

	const body = document.querySelectorAll(".cards-container")[0]
	body.appendChild(div1card)

}

o.forEach(item => createDom(item))
o1.forEach(item => createDom(item))
o2.forEach(item => createDom(item))
o3.forEach(item => createDom(item))
o4.forEach(item => createDom(item))


})
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
