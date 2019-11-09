// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
function tabMaker(topic) {
    const tab = document.createElement('div');
    tab.classList.add('tab');
    tab.textContent = topic;
    return tab;
};

axios.get(`https://lambda-times-backend.herokuapp.com/topics`)
    .then(function (results) {
        console.log("here are the tab topics",results.data);
        const tabTitles = document.querySelector('.topics')
        results.data.topics.forEach(element => {
            tabTitles.appendChild(tabMaker(element));
        });
    })
    .catch(err =>
        console.log(err));

