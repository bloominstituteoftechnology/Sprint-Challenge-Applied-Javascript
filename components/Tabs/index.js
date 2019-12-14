// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const tab = document.querySelector('.tabs');

axios
	.get('https://lambda-times-backend.herokuapp.com/topics')
	.then((res) => {
		const topics = res.data;
		console.log(res, 'topics');
		console.log(topics);
		createTopic(topics);
		const newTopic = createTopic(topics);
		tab.appendChild(newTopic);
	})
	.catch((err) => {
		console.log(err);
	});

function createTopic(arr) {
	const tabItem = document.createElement('p');

	tab.appendChild(tabItem);

	//creating new tab

	newTab.forEach((topic) => {
		const item = document.createElement('li');
		item.textContent = topic;
		tabItem.appendChild(item);
	});

	return tabItem;
}
