// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


const topicReq = axios.get( "https://lambda-times-backend.herokuapp.com/topics")
topicReq.then(res => console.log(res.data))

let topics = document.getElementsByClassName('topics')[0] //parent element to append to 

function newTab( tabName){
	 let div = document.createElement('div')
	 div.classList.add('tab')
	 div.innerText = tabName 
	 topics.appendChild(div)

}

newTab('ruby') // new tab component


topicReq.then(res => { 						// iterate through all topics making new tabs for each
	const topicArr = res.data.topics
	topicArr.forEach(item => newTab(item))
})
