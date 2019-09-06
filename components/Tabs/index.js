// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const topicsArray = ['javascript', 'bootstrap', 'technology', 'jquery', 'node.js'];
topicsArray.forEach(topics => {
    axios.get('https://lambda-times-backend.herokuapp.com/topics')

.then (data => {
    const tabs = newTab(data.data);
    const newTabs = document.querySelector('.topics');
    newTabs.appendChild(tabs);
    // console.log(response);
    // response.data.message.forEach(item => {
    })
});

function newTab(info) {
    const divTab = document.createElement('div');
    
    
    divTab.classList.add('divTab');
    divTab.textContent = info.topics;
    divTab.appendChild(topics);
    
    
    return divTab;

};



