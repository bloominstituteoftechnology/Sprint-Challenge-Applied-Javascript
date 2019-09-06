// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const topics = document.querySelector('.topics');

function newTab(tabInfo){
    // CREATE ELEMENTS
    const tab = document.createElement('div');

    // ADD CLASSES
    tab.classList.add('tab');

    // ADD CONTENT
    tab.textContent = `${tabInfo}`;

    // APPEND

    // RETURN
    return tab;
}

    axios
    // GET REQUEST
    .get('https://lambda-times-backend.herokuapp.com/topics')
    // PROMISE
    .then(response => {
        // RETURN RESPONSE
        // console.log(response);
        response.data.topics.forEach(items => {
            // APPEND
            topics.appendChild(newTab(items))
        })
    })
    // CATCH ERRORS
    .catch(error => {
        console.log('The data was not received. Try again.', error)
    })

