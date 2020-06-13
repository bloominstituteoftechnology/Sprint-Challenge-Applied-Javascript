// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
const topcTab =document.querySelector('.topics');
 
axios.get('https://lambda-times-backend.herokuapp.com/topics')
   .then ( (response) => {
    console.log('correct info', response)
 
    response.data.topics.forEach ((array) => {
        topcTab.appendChild(tab(array))
 
    })
})
 
    .catch( (err) =>{
        console.log('error')
 
    })
    
function tab (name){
    const newTopic = document.createElement("div");
    newTopic.classList.add('tab');
    newTopic.textContent =name;
 
    document.querySelector('.topics').appendChild(newTopic)
 
    return newTopic;
 
};