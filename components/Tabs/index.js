// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>




let url = 'https://lambda-times-backend.herokuapp.com/topics'

let topicContainer = document.querySelector('.topics')

let data ;

axios.get(url)
    .then( response =>{
        console.log(response.data);
        
        let topics = response.data.topics
        for (let i =0; i<topics.length; i++){
            topicHere = document.createElement('div');
            topicHere.classList.add('tab');
            topicHere.textContent = 'Topic Here'

            topicContainer.appendChild(topicHere)
        }
    }).catch( err => {
        console.log(err);
    })