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
    .then((response => {
        let dom = document.querySelector('.topics')
        response.data.topics.forEach(element => {
            dom.appendChild(createTab(element))
        })
    }))

    .catch((error) => {
        console.log('Network Error')
        console.log(error)
    })

    function createTab (object) {
        let tabs = document.createElement('div')
        tabs.classList.add('tab')
        tabs.innerHTML = object
        // tabs.textContent = 'Topics:'
        
        // let topics = document.createElement('div')
        // topics.textContent = `Topics: ${array.topics}`
        // tabs.classList.add('topics')
        // tabs.appendChild(topics)

        return tabs
    }

// tabs.addEventListener('click', () => {
//     tabs.classList.toggle('topics')
// })


// axios.get('https://lambda-times-backend.herokuapp.com/topics')
//     .then((response) => {
//         let dom = document.querySelector(".topics");
//         response.data.topics.forEach(element => {
//             dom.appendChild(createTab(element));
//         })
//     })
//     .catch((error) => {
//         console.log("Network Error");
//         console.log(error);
//     })


// let menuItems = [
//     'All',
//     'Bootstrap',
//     'JavaScript',
//     'JQuery',
//     'Node',
//     'Technology'
// ];

// menuItems.forEach((item) => {
//     let tab = tab(item);
//     tabs.appendChild(tab)
// })