// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
 
axios
    .get(`https://lambda-times-backend.herokuapp.com/topics`)
    .then((res) => {
        console.log('Here is the res: ', res);
        res.data.data.forEach((topics) => {
            const tabsDiv = documenet.querySelector('.tabs');
            const topics = document.createElement('div');

           divTopics.appendChild(topics);
        });
    })
    .catch((err) => {
        console.log('There is an error: ', err);
    
    });

    const divTopics = document.querySelector('div.topics');
