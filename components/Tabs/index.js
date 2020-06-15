// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>


axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(response => {
        response.data.topics.forEach(el =>{
            const topics = document.querySelector('.topics');
            console.log(topics);
            const newTab = createTab(el)
            topics.append(newTab);
        }); 
    })
    .catch(error =>{
        console.log('The data was not returned', error)
    })


function createTab(topic){
    //create element
    const tab = document.createElement('div');
    //add class
    tab.classList.add('tab');
    //set content
    tab.textContent = topic;
    return tab;
}
