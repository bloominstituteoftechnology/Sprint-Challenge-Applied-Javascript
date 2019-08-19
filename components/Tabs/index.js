// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

// axios.get('https://lambda-times-backend.herokuapp.com/topics')
//   .then(response => {
//     console.log(response.data.topics)
//   })
//   .catch(err => {
//     console.log(err)
//   })


  const topicsArray = ["javascript", "bootstrap", "technology", "jquery", "node.js"]

  topicsArray.forEach( (item) => {
    axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(response => {
        tabCreator(response.data.topics)
    })
    .catch(err => {
        console.log(err)
    })
})
  

  function tabCreator(userObj) {
    const newTab = document.createElement('div')
    newTab.classList.add('tab')
    newTab.textContent = userObj.data

    const container = document.querySelector('.tabs .topics span.title')
    container.appendChild(newTab) 
} 

axios.get('https://lambda-times-backend.herokuapp.com/topics')
  .then(response => {
    tabCreator(response.data.topics)
  })
  .catch(err => {
    console.log(err)
  })



