// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
// calling API to fetch the topics
axios.get('https://lambda-times-backend.herokuapp.com/topics')
.then(response => {
    console.log(response.data)
// selecting entry point for our topics to the DOM
    const entryPointTopics = document.querySelector('.topics')
    //going through the data returned from API
    response.data.topics.forEach(item => {
        // returns a DOM node(element)
        const newTopic = Topic(item);
        // populating the DOM with the new topics
         entryPointTopics.appendChild(newTopic)
    })
    // entryPointTopics.appendChild.(response.data)
    console.log(entryPointTopics)
    
})

function Topic (topic) {
    const newTopic = document.createElement('div')

    newTopic.classList.add('tab')
    
    newTopic.textContent = topic

    



    return newTopic
}


