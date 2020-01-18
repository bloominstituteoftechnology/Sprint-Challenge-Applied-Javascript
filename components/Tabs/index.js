// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

//function takes a string called "item" and returns HTML section

function createTab(item){
    console.log("DEBUG",item)
    const newTopic = document.createElement('div');

    //create class
    newTopic.classList.add('tab');

    //set text content
    newTopic.textContent = item
    console.log("debug1",newTopic)
    return newTopic;
}

const articles = document.querySelector('.topics');
console.log("debug2",articles)



    axios.get('https://lambda-times-backend.herokuapp.com/topics')

    .then(response =>{
        console.log('response shown',response)
        response.data.topics.forEach(topic =>{
           articles.append(createTab(topic))
        })
    })
.catch(error =>{
    console.log("oops", error);
});
console.log("debug3", articles)