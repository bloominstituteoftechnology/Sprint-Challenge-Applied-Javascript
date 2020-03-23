// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const topicsDom = document.querySelector('.topics');

axios.get('https://lambda-times-backend.herokuapp.com/topics')

.then((response) => {
    const object = response.data.topics;
    object.forEach((topic) => {
    topicsDom.append(Tabs(topic))
    })
})

.catch((err) => {
    console.log('The data could not be reached', err);
})



function Tabs (topic) {

    const tabs = document.createElement('div');

    tabs.classList.add('tab');

    tabs.textContent = topic;

    return tabs;


}