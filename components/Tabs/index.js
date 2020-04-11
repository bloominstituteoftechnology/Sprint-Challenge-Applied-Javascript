// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>

// Retrieve the text for the tabs
axios
  .get('https://lambda-times-backend.herokuapp.com/topics')
  .then((topics) =>
    createTabs(topics.data.topics))
  .catch((err) =>
    console.error(err))

// <div class="topics">
const topics = document.querySelector('.topics')

// Create the tabs and post them to the DOM
const createTabs = (tabData) => {
  tabData.map(tabTitle => {
    let tab = document.createElement('div')
    tab.classList.add('tab')
    tab.textContent = tabTitle
    topics.appendChild(tab)
  })
}