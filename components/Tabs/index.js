// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

function tabsComponent() {
    return axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(data => {
        let topics = data.data.topics
        topics.forEach(topic => createTab(topic));
    })

    .catch(err => console.log(err));
}
console.log(tabsComponent);

function createTab(item) {
    const topics = document.querySelector('.topics');

    const tab = document.createElement('div');
    tab.setAttribute('class', 'tab');
    tab.textContent = item;

    topics.appendChild(tab);
}

tabsComponent();
