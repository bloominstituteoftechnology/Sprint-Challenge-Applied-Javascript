// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

function Tab(item) {
    let tab = document.createElement('div');
    tab.className = 'tab';
    tab.textContent = item;
    return tab;
}
function ErrorComp(err) {
    let e = document.createElement('div');
    e.className = 'error';
    e.textContent = err.message;
    return e;
}
axios
    .get('https://lambda-times-backend.herokuapp.com/topics')
    .then((response) => {
        console.log(response);
        response.data.topics.forEach((item) => document.querySelector('.topics').appendChild(Tab(item)))
    })
    .catch((error) => {
        console.error(error);
        document.querySelector('.topics').appendChild(ErrorComp(error));
    });

