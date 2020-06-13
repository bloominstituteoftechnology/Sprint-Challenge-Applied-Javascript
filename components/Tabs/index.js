// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics  x
// Once the data is resolved use console logs or breakpoints to review the structure. x

// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>

axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then( response => {
        console.log('Tabs Data:' , response)
        const dataArray = response.data.topics
        dataArray.forEach(element => {
        const arrayTab = divTab(element)
        divTopic.appendChild(arrayTab)
        })
    })
    .catch( err => {
        console.log('nope',err)
    })

const divTopic = document.querySelector('.topics');

function divTab (topic) {
    const tabClass = document.createElement('div');

    tabClass.classList.add('tab');

    tabClass.textContent = topic;

    return tabClass
}
