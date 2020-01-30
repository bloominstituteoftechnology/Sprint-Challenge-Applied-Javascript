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
		// let newArr = []
		// newArr.push(newObj.javascript)
		// newArr.push(newObj.bootstrap)

		console.log(newObj)
 const o = newObj.javascript
 const o1 = newObj.bootstrap
 const o2 = newObj.technology
 const o3 = newObj.jquery
 const o4 = newObj.node


o2.forEach(item => console.log(item))


function createDom(obj){
	const div1 = document.createElement('div')
	const div2= document.createElement('div')
	const div3= document.createElement('div')
	const div4= document.createElement('div')
	const img = document.createElement('img')
	const span = document.createElement('span')

	div1.classList.add('card')
	div2.classList.add('headline')
	div2.innerText = `${obj.headline}`
	div3.classList.add('author')
	div4.classList.add('img-container')
	img.src = `${obj.authorPhoto}`
	span.innerText = `By ${obj.authorName}`


	div1.appendChild(div2)
	div1.appendChild(div3)
	div3.appendChild(div4)
	div4.appendChild(img)
	div4.appendChild(span)

const body = document.querySelectorAll(".header-container")[0]
body.appendChild(div1)

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
