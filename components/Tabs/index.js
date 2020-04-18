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
    .then( response => {
        response.data.topics.forEach((item) => {
            let newTab = topicMaker(item);
            let topicCon = document.getElementsByClassName('topics');
            topicCon[0].appendChild(newTab);
            

        });
    })
    .catch( err => {
       console.log("There is an error");
    })

    function topicMaker(dataObj){
        let newTopic = document.createElement('div');
        newTopic.textContent = dataObj;
        newTopic.classList.add('tab');
        return newTopic;
    };