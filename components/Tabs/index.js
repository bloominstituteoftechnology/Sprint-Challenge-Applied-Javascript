// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

function tabCreate(data){

	let container = document.createElement('div');
	container.textContent = data;
	container.classList.add('tab');

	return container;
}

//Place to insert data
const insertInto = document.querySelector('.topics');
//Get data
axios.get("https://lambda-times-backend.herokuapp.com/topics")
.then(response => {
	response.data.topics.forEach(article => {
		insertInto.appendChild(tabCreate(article));
	})
})
.catch(err => {
	console.log("~ERROR~", err);
})
