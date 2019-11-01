// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


const newTab = document.querySelector('.topics-element')



axios.get(`https://lambda-times-backend.herokuapp.com/topics`)
    .then( response => {
        console.log(response);
    newTab.appendChild(Tab(response.data))
    })
    .catch( err => {
        console.log("The data was not returned", err);
    });

 
function Tab (topics){ 
    const newTab = document.createElement('div')

    topics.forEach(items => {
        const topicsItems = document.createElement('li');
        topicsItems.textContent = items;
        topics.appendChild(topicsItems);
      });
    newTab.classList.add('tab') 
    newTab.textContent = `NewTab ${data.topics}`
    newTab.appendChild(topics)

    return newTab  

    }