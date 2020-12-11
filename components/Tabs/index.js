// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>

function tabSetup(data) 
{
    //create tab, add class list, add text content
    const tab = document.createElement('div');
    const topics = document.querySelector('topics');
    tab.classList.add('tab');
    tab.textContent = data;


    return tab;
}

//grab topics
const grabTopics = document.querySelector('.topics');


//axios get request
axios.get("https://lambda-times-backend.herokuapp.com/topics")
.then(resolve => {

    resolve.data.topics.array.forEach(element => {     
        const createTopic = topics(element);
        grabTopics.appendChild(createTopic);            
    });        
    
})

.catch(error => {
    log("DOES NOT COMPUTE!");
});
