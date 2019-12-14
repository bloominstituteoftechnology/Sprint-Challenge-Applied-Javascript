// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(response => {
        console.log(response);
        response.data.topics.forEach(items => {
            const tab1 = createNewTab(items)
            topicpoint.appendChild(tab1)
        })
    })

const topicpoint = document.querySelector('.topics');
function createNewTab (){
    const tabTopic = document.createElement('div');
    tabTopic.classList.add('tab');
    tabTopic.textContent = 'topic here';
    return tabTopic;
    
}

console.log(createNewTab());