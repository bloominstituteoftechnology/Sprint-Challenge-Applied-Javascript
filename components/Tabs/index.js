// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>


axios.get('https://lambda-times-backend.herokuapp.com/topics').then(response => {
    let info = response.data.topics.map(element => {
        let node = document.createElement('div');
        node.classList.add('tab');
        node.textContent = element;


        return node;

})


    let topic = document.querySelector('.topics');


info.forEach(element => topic.appendChild(element));
}).catch(err => {
    let topic = document.querySelector('.topics');
    topic.textContent = "An error has occured!";
})