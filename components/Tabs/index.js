// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to: https://lambda-times-backend.herokuapp.com/topics
// Console.log the data and review the structure.
// Iterate over the topics creating a new Tab component to add the DOM
// under the .topics element.
//  The tab component should look like this:
//    <div class="tab">topic here</div>


// axios.get('https://lambda-times-backend.herokuapp.com/topics')
//     .then(response =>{
//         console.log(response);
//         response.data.topics.forEach(item=> {
//             let newTab = createTab(item);
//             allTopicsTab.appendChild(newTab)
//         });
//     })
    // .catch(error => {
    //     console.log(`AGH!`, error);
    //   });

    axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(response =>{
        console.log(response);
            let newTab = createTab(response);
            allTopicsTab.appendChild(newTab);
    })

const allTopicsTab = document.querySelector('.topics')

function createTab(obj){
    for (let i = 0; i < obj.data.topics.length; i++) {
        let topicTab = document.createElement('div');
        topicTab.classList.add('tab');
        topicTab.textContent = obj.data.topics[i];
        return topicTab;
    };
}

