// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
const topics = document.querySelector('.topics')
let response = [];
axios.get('https://lambda-times-backend.herokuapp.com/topics')
.then(res => {
    console.log(res.data.topics);
    res.data.topics.forEach(topic => {
        const createTab = newTab(topic)
        topics.append(createTab);
    });
})
.catch(err => {
    console.log(err);
});
console.log(response)

function newTab(obj) {
    const tab = document.createElement('div');
    tab.classList.add('tab');
    tab.textContent = obj;
    
    return tab
};

