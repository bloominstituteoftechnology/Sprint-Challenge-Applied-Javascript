// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

let topics = document.querySelector('.topics');
axios.get('https://lambda-times-backend.herokuapp.com/topics')
.then(res => {
    // console.log(res)
    let lambdaTopics = res.data.topics; //creating a variable to hold the data from end point
    lambdaTopics.forEach(element => { //iterating over each topic and creating tab components
        let topic = document.createElement('div');
        topic.classList.add('tab');
        topic.textContent = element;
        topics.append(topic); //adding tab component to parent div found in html
    });
})
.catch(err => {
    console.log('No data received', err);
})