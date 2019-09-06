// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

topics = document.querySelector('.topics');

axios.get("https://lambda-times-backend.herokuapp.com/topics")
  .then(response => {
    console.log(response);
    response.data.topics.forEach(item => {
              const newTab = Tab(item);
              topics.appendChild(newTab);
            });
        })
  .catch(error => {
    console.log("The data was not returned", error)
  });

    function Tab(topics) {
        // <div class="tabs">topic here</div>
        const 
        tabs = document.createElement('div');
        tabs.classList.add('tabs');
        tabs.textContent = (topics);
        tabs.appendChild(topics);
    
        return Tab

    }