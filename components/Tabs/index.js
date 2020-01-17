// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

topicArray = [];
axios.get('https://lambda-times-backend.herokuapp.com/topics')
.then(res => {
    // console.log(res);
    res.data.topics.forEach(topic => {
        topicArray.push(topic)
    });
    console.log(topicArray)
})
.catch( error => {
    console.log(error)
})

function createTab(array){
    array.forEach(topic =>{
        let tab = document.createElement('div');
        tab.classList.add('tab');
        tab.textContent = topic;
    })
    console.log(tab);
    return tab;
}
let topicss = document.querySelector('.topics');
topicss.append(createTab(topicArray));
// createTab(topicArray);