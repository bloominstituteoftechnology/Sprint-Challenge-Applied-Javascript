// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics   X
// Once the data is resolved use console logs or breakpoints to review the structure.   X
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM X
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>

const topicParentDiv = document.querySelector('.topics')

async function getTopics() {
    const topicsData = await axios.get('https://lambda-times-backend.herokuapp.com/topics')
    const response = await topicsData.data.topics
    response.forEach( e => topicParentDiv.appendChild(TabComponent(e)))
}

getTopics()

function TabComponent(data){
    const tab = document.createElement('div')
    tab.classList = 'tab'
    tab.textContent = data
    
    return tab
}