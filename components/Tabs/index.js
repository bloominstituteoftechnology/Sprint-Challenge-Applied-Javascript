// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
function tabCreator(tabTitle){
    let newTab = document.createElement('div');
    newTab.textContent = tabTitle;
    newTab.classList.add('tab');
    
    return newTab;
}

const topicElement = document.querySelector(".topics");

// testArray.forEach( item => {
//     let tab = tabCreator(item);
//     topicsEl.appendChild(tab);
// })

axios.get('https://lambda-times-backend.herokuapp.com/topics')
.then( response => {
    // console.log(response);
    response.data.topics.forEach( item => {
        let tab = tabCreator(item);
        topicElement.appendChild(tab);
    })
})
.catch( error => {
    console.log("Error:", error);
})