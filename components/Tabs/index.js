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
.then((resolve) => {   
    console.log('topics',resolve.data) 
   
    let topics = document.querySelector('.topics');
    topics.appendChild(tab(resolve.data));
    });

function tab(topic){
    let topics = document.querySelector('.topics');
    let tab = document.createElement('div');
    tab.classList.add('tab');
    tab.textContent = topic.topics[0];
    topics.appendChild(tab);

    console.log(topics)
    return tab
}