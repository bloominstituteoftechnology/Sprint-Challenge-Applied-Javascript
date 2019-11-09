// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

// const allTopics = [
//     'ALL',
//     'JAVASCRIPT',
//     'TECHNOLOGY',
//     'NODE.JS',
//     'JQUERY',
//     'BOOTSTRAP',   
// ]


// allTopics.forEach(item => {
//     axios.get('https://lambda-times-backend.herokuapp.com/topics')
//     .then(function(response) {
//         console.log(response);
//             const newTab = tabComponent(response.data)
//             tabTopics.appendChild(newTab);
//     })
//     .catch(function(error) {
//         console.log('There Is An Error');
//     })
// })



// axios.get('https://lambda-times-backend.herokuapp.com/topics')
//     .then(function(response) {
//         console.log(response);
//             const newTab = tabComponent(response.data);
//             tabTopics.appendChild(newTab.forEach(item => {
//                 console.log(item);
//             }));
//     })
//     .catch(function(error) {
//         console.log('There Is An Error');
//     })


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
    .then(function(response) {
        console.log(response.data)
        const topics = response.data.topics;
        topics.forEach(item => {
            const newTab = tabComponent(item);
            tabTopics.appendChild(newTab);
        })
    })
    .catch(function(error) {
        console.log('There Is An Error');
    })

const tabTopics = document.querySelector('.topics');

function tabComponent(item) {
    const divTab = document.createElement('div');

    tabTopics.appendChild(divTab);

    divTab.classList.add('tab');

    divTab.textContent = `${item}`;

    return divTab
}

