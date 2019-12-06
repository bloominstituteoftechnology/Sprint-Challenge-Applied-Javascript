// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const topicTabs = document.querySelector('.topics');
/*  I think this needs to be inside the axios 
function tabComp(tabTopics) {
    //create element
    const topicHere = document.createElement('div');
    //add class
    topicHere.classList.add('tab');
    //textContent
    topicHere.textContent = 'topic here';
};
*/ 
axios.get('https://lambda-times-backend.herokuapp.com/topics')
.then (response => {
    response.data.topics.forEach(element => {
        let topicValue = document.createElement('div');//created the element
        topicValue.classList.add('tab');//added the class
        topicValue.textContent = element; // dont know how this works but work on the last assigment so I'm assuming it works
        topicTabs.appendChild(topicValue);//this adds the topicsValue to the .topic div on the html
    });
})
.catch(error => {
    console.log('Something is not right.', error);//if something goes wrong it will print error
})