// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>




// function tabCreator(topics).forEach(item => {
//     const tab = arg.topics 
// }) {

function tabCreator(topics) {

    const tab = document.createElement('div')

    tab.classList.add('tab')

    tab.textContent = topics

    return tab

}
const topics = document.querySelector('.topics');

axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(arg => {
        console.log(arg)
        arg.data.topics.forEach(item => {
            topics.appendChild(tabCreator(item))
        });
    })