// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

function createTab(item){
    const newTopic = document.createElement('div');

    //create class
    newTopic.classList.add('tab');

    //set text content
    newTopic.textContent = (item)
}

const entryPoint2 = document.querySelector('.topics');
console.log("entryPoint2",entryPoint2)

// entryPoint.forEach(item=>{
    axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(response =>{
        console.log(response.data.topics);
        response.data.topics.forEach(item=>{
            const newTab = createTab(item);
            entryPoint2.append(newTab);
        //     let topicInfo= createTab(item);
        //     entryPoint.appendChild(topicInfo);
        // console.log(response);
        })
    })
.catch(error =>{
    console.log("oops", error);
});