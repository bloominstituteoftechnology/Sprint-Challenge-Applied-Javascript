// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios 
    .get("https://lambda-times-backend.herokuapp.com/topics")
    .then(response => {
        console.log(response);
    //     response.data.message.forEach('https://lambda-times-backend.herokuapp.com/topics' => {
    //         const newTab = tabs(item);
    //         entryPoint.appendChild(newTab);
    //     });
    // })
    // .catch(error => {
    //     console.log('The data was not returned', error);
    });
    
function createTab(topics, title){

    const tab = document.createElement('div');
    const topics = document.createElement('div');
    const title = document.createElement('span');

tab.appendChild(topics)
tab.appendChild(title)

tab.classList.add('tabs')
topics.classList.add('topics')
title.classList.add('title')

tab.textContent = topics
tab.textContent = title
}
return tab;
