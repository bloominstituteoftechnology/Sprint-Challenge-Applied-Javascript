// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to: https://lambda-times-backend.herokuapp.com/topics
// Console.log the data and review the structure.
// Iterate over the topics creating a new Tab component to add the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(response =>{
        console.log(response);
        response.data.topics.forEach(item=> {
            let newTab = createTab(item);
            allTopicsTab.appendChild(newTab)
        });
    })

const allTopicsTab = document.querySelector('.topics')

function createTab(obj){
    let topicTab = document.createElement('div');
    topicTab.classList.add('tab');

    for (let i = 0; i < obj.length; i++) {
        topicTab.textContent = obj[i];
    };
    
    return topicTab;
}
