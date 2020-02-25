// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

function NewTab (item) {
//create new Tab
const newTab = document.createElement('div');
newTab.classList.add('tab');
newTab.textContent = item;
//append to the parent - .topics

return newTab;
}

const topics = document.querySelector('.topics');


axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then( (response) => {
        // deal with the response data in here
        response.data.topics.forEach((item) => {
            let newerTab = NewTab(item);
            topics.appendChild(newerTab)
        })
        console.log(response);
    })
    .catch( err => {
        // deal with the error in here
        console.log("There is an error: ", err);
    })




    //for each here