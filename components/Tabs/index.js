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
    newTab(response);
})

.catch(error => {
    console.log('The data request was not returned!', error);
});

const tabs = document.querySelector('.topics');

function newTab(tabData) {

const tab = document.createElement('div');

tab.classList.add('tab');



const entryPoint = document.querySelector('.topics');
entryPoint.appendChild(tab);

return tab;
}

