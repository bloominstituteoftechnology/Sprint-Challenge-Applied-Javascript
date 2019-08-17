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
        console.log(response)
        // document.querySelector('.topics').appendChild(tab(response.data))
    })
    .catch((error) => {
        console.log(error)
    })

    const tabs = document.querySelector('div')

    function tab (array) {
        const tabs = document.createElement('tabs')
        tabs.textContent = `Topic: ${array.tabs}`
        
        tabs.addEventListener('click', () => {
            tabs.classList.toggle('topics')
        })

        const topics = document.createElement('div')
        topics.textContent = `Topics: ${array.topics}`
        tabs.classList.add('topics')
        tabs.appendChild(topics)

        return tabs
    }

let menuItems = [
    'All',
    'Bootstrap',
    'JavaScript',
    'JQuery',
    'Node',
    'Technology'
];

// menuItems.forEach((item) => {
//     let tab = tab(item);
//     tabs.appendChild(tab)
// })
