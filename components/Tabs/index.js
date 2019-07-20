// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const topicData = [];
// API Call to Retrieve Topic data and feed to tabMaker
axios.get('https://lambda-times-backend.herokuapp.com/topics')
	.then (data => {
	    const topicData = data.data;
        console.log(topicData);
        topicData.forEach(topicData => {
            new tabMaker(topicData.topics);
            return tabMaker();
        })

	})
	.catch(err => {
		console.log('oops!');
	})


// Component to generate Topic list
function tabMaker(topicData) {

// Create Template
const tabDiv = document.createElement('div');

// Assign Class
tabDiv.classList.add('tab');

// Assign Value
tabDiv.textContent = `${topicData.topics}`;

return tabDiv;
}

const topicsContainer = document.querySelector('.topics');
topicsContainer.appendChild(tabMaker(topicData.topics));
