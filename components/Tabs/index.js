// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

function tabMaker(data){
    const tab = document.createElement('div');
    tab.textContent = data;
    tab.classList.add('tab');
    return tab;
}

axios

    .get('https://lambda-times-backend.herokuapp.com/topics')

    .then(response=>{
        console.log(response);
        response.data.topics.map(topic=>{
            document.querySelector('.topics').append(tabMaker(topic));
        })
    })

    .catch(err => {
        console.log('the tab data was not returned' + err);
    })