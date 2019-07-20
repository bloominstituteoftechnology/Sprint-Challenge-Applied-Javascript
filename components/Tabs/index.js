// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

let allTopics = document.querySelector('.topics');

axios.get('https://lambda-times-backend.herokuapp.com/topics')
.then((resolve) => {
    resolve.data.topics.forEach(data => {
    let tabs = tab(data)
    allTopics.appendChild(tabs);
    })   
});

function tab(topic){
    let tab = document.createElement('div');
    tab.classList.add('tab');
    tab.textContent = topic;
    allTopics.appendChild(tab);

    console.log(tab)
    return tab
}