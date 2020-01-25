// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

let tabArray = [];
let topics = {};
axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(response => {
        tabArray = response.data.topics
            // console.log(tabArray);
        tabArray.forEach(topic => {
            createTab(topic)
        });
    })
    .catch(error => console.error(error))

function createTab(topic) {
    //Create Tabs
    const tab = document.createElement('div');
    const topicDiv = document.querySelector('.topics');

    //Add textContent
    tab.textContent = `${topic}`;
    tab.classList.add('tab');

    //Append to DOM
    topicDiv.appendChild(tab);
}