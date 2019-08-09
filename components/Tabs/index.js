// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const topicDiv = document.querySelector('.topics');

axios.get(`https://lambda-times-backend.herokuapp.com/topics`)
.then(x => {
    console.log('response', x.data.topics)
    const xTopic = x.data.topics;
    xTopic.forEach(word => {
        tabComponent(word)
    })
})

.catch(error => {
    console.log('Error!')
})

function tabComponent(arr) {
    const aItem = document.createElement('div');
    aItem.classList.add('tab');
    aItem.textContent = arr

    topicDiv.appendChild(aItem)

    return aItem;
}
