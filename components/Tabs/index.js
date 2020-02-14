// Step 2: Create Tabs
function createTab(topics){
    let tab = document.createElement('div')

    tab.textContent = topics

    tab.classList.add('tab')
    return tab
}

let entryPoint = document.querySelector('.topics')




axios.get("https://lambda-times-backend.herokuapp.com/topics")
.then(response => {
  response.data.topics.forEach(item => {
      const newTab = createTab(item)
      entryPoint.append(newTab)
  });
})
.catch( err => {
  console.log('the error is', err)
})
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
