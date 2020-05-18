// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>

const tabEntry = document.querySelector('.topics')

function tabMaker (data){
  const tabDiv = document.createElement('div')
  tabDiv.classList.add('tab')
  tabDiv.textContent = data
  
  return tabDiv
}
axios.get('https://lambda-times-backend.herokuapp.com/topics')
.then (data => {const myTopics = Object.values(data.data.topics)
    myTopics.forEach(data=>tabEntry.append(tabMaker(data)))
    
// tabEntry.append(tabMaker(myTopics))

})
